
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses1',
  template: `
    {{ course.title | uppercase | lowercase}} <br />
    {{ course.students | number }} <br /> <!-- Decimal Pipe separates every 3 digits by comma (for readability) -->
    {{ course.rating | number: '1.2-2' }} <br /> <!-- Decimal Pipe with parameter - 1integers.2minAfterDot-2maxAfterDot  -->

    <!-- USD by default, :CurrencyABBR:ti show or not currency sign:1integers.2minAfterDot-2maxAfterDot  -->
    {{ course.price | currency:'AUD':false:'3.2-2' }} <br />

    {{ course.releaseDate | date:'shortDate' }}

    <br />
    {{ text | summary: 10 }}

  `
})
export class Courses1Component {
 course = {
     title: 'Some course Title',
     rating: 4.5896,
     students: 30123,
     price: 190.95,
     releaseDate: new Date(2016, 3, 1)
 };

    text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;
}
