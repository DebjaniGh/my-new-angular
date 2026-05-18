// Contact Form Component - Handles user contact form submission with validation
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  // Reactive form instance for contact form
  contactForm!: FormGroup;
  // Loading state indicator
  isLoading = false;
  // Success message to display after successful submission
  successMsg: string = '';
  // Error message to display after failed submission
  errorMsg: string = '';
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // Initialize the contact form with validators
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact_no: new FormControl('', Validators.required),
      message: new FormControl(''),
    });
  }

  onSubmit() {
    // Clear previous messages
    this.successMsg = '';
    this.errorMsg = '';

    if (this.contactForm.valid) {
      // Set loading state
      this.isLoading = true;
      const formData = this.contactForm.value;

      // submit form data
      this.contactService.submitForm(formData).subscribe({
        next: (response) => {
          // Handle successful submission
          this.isLoading = false;
          this.successMsg = response.message;
          this.contactForm.reset();
          // Clear success message after 2 seconds
          setTimeout(() => {
            this.successMsg = '';
          }, 2000);
        },
        error: (error) => {
          // Handle failed submission
          this.isLoading = false;
          this.errorMsg = error.message;
          this.contactForm.reset();
          // Clear error message after 2 seconds
          setTimeout(() => {
            this.errorMsg = '';
          }, 2000);
        },
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.contactForm.markAllAsTouched();
    }
  }
}
