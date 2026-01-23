import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() usrName!: string;
  constructor() {
    console.log('constructor called in child');
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges called in child');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit called in child');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called in child');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called in child');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called in child');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called in child');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called in child');
  // }

  // ngOnDestroy() {
  //   console.log('Destroy called');
  // }
}
