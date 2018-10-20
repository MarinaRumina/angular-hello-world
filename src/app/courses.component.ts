
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
  <br />
  <button (click) = "onSave()">Save</button>
  <br />
  <div (click) = "onDivClicked ($event) " >
    <button (click) = "onSave1($event)">Save</button>
  </div>

  <input (keyup) = "onKeyUp($event)" type="text" />
  <br />
  <input (keyup.enter) = "onKeyUpWithFilter()" type="text" />
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  isActive = false;

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
