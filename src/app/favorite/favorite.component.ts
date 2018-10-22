import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // not recommended way to declare input properties
  // inputs: ['isFavorite']
})
export class FavoriteComponent {

  // another approach
  // using decorator @Input() to mark fields or properties as input properties, do not forget to import from the library
  // building reusable components is a good practice to use aliases (nic-names) to input fields and props. (in the parentheses)
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter(); // raising custom event from the component

  onClick() {
    this.isFavorite = !this.isFavorite;

    // transferring simple value to output
    // this.change.emit(this.isFavorite); // optionally is possible to pass data to raised event

    // transferring dom object
    console.log({ newValue: this.isFavorite });
  }

  constructor() {}


}


export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
