import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log('on Blur');

    // reading value of the input field
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
    this.el.nativeElement.value = value.toUpperCase();
    }
  }

  @HostListener('focus') onFocus() {
    console.log('on Focus');
  }




}
