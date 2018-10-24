import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-tick',
  templateUrl: './check-tick.component.html',
  styleUrls: ['./check-tick.component.css']
})
export class CheckTickComponent {

  @Input('is-checked') isActive: boolean;
  @Input('countChecked') countChecked: number;

  onClick() {
    this.countChecked += (this.countChecked) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
