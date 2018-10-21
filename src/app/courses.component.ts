
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
  <h2>{{ "Title: " + title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
  <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>
  <button class="btn btn-primary">Save</button>
  <br />  <br />
  <button (click) = "onSave()">Save</button>
  <br />  <br />
  <div (click) = "onDivClicked ($event) " >
    <button (click) = "onSave1($event)">Save</button>
  </div>
  <br />
  <input (keyup) = "onKeyUp($event)" type="text" />
  <br />  <br />
  <input (keyup.enter) = "onKeyUpWithFilter()" type="text" />
<!--
  <br />  <br />
  <p>getting data from input field</p>
  <input (keyup.enter) = "onKeyUp1($event)" type="text" />
  <br />
  <input #email (keyup.enter) = "onKeyUp2(email.value)" type="text" /> <!-- declaring template variable (#varName) -->
-->
  <br />  <br />
  <p>2 way binding</p>
  <input [value]="email" (keyup.enter) = "email = $event.target.value; onKeyUp3()" />
  <input [(ngModel)]="email" (keyup.enter) = "onKeyUp3()" />
  <br />

  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  isActive = false;

  email = 'some@email.com';

  // 2 way binding
  onKeyUp3() {
    console.log(this.email);
  }
  // onKeyUp4(email) {
  //   console.log(email);
  // }


  // getting data from input field
  onKeyUp1($event) {
      console.log($event.target.value);
  }
  onKeyUp2(email) {
    console.log(email);
  }

  // 2 methods with same output
  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('ENTER was pressed');
    }
  }
  onKeyUpWithFilter() {
      console.log('ENTER was pressed');
  }

  onSave() {
    console.log('Button was clicked');
  }

  onDivClicked() {
    console.log('Div was clicked');
  }
  onSave1($event) {
    $event.stopPropagation(); // prevents events of outer blocks from execution (bubbling)

    console.log('Button 2 was clicked', $event);
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
