import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-title-case-input',
  templateUrl: './title-case-input.component.html',
  styleUrls: ['./title-case-input.component.css']
})
export class TitleCaseInputComponent implements OnInit {

  text = 'Some text';
  enteredText: string;

  onKeyUp() {
    this.text = this.enteredText;
  }

  constructor() { }

  ngOnInit() {
  }

}
