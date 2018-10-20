
import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})

export class AuthorsComponent {

  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

}
