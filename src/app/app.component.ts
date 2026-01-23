import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usrName!: string;
  isDestroy: boolean = false;
  tasks: { desc: string; startTime: string; endTime: string }[] = [
    {
      desc: 'Task 1',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
    },
    {
      desc: 'Task 2',
      startTime: '11:00 AM',
      endTime: '12:00 PM',
    },
    {
      desc: 'Task 3',
      startTime: '12:00 PM',
      endTime: '01:00 PM',
    },
    {
      desc: 'Task 4',
      startTime: '01:00 PM',
      endTime: '02:00 PM',
    },
  ];

  products: { name: string; price: number; qty: number }[] = [
    {
      name: 'Product 1',
      price: 100,
      qty: 10,
    },
    {
      name: 'Product 2',
      price: 200,
      qty: 20,
    },
    {
      name: 'Product 3',
      price: 300,
      qty: 30,
    },
    {
      name: 'Product 4',
      price: 400,
      qty: 40,
    },
  ];

  // constructor() {
  //   console.log('constructor called in parent.');
  // }

  // ngOnChanges(changes: SimpleChange): void {
  //   console.log('ngOnChanges called in parent' + JSON.stringify(changes));
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit called in parent.');

  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called in parent.');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called in parent');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called in parent');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called in parent component');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called in parent component');
  // }

  onSubmit(event: any) {
    this.usrName = event?.value;
  }

  removeList() {
    this.isDestroy = true;
  }
}
