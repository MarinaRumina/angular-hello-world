import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'}
  ];

  onAdd() {
    this.courses.push({id: 4, name: 'course 4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }
  // ------------------------------------------
  // viewMode = 'map';

// ------------------------------------------
  // title = 'hello-world';

  // courses = [1, 2];

  // post = {
  //   postTitle: 'Title',
  //   isFavorite: true
  // };

  // tweet = {
  //   body: '...',
  //   isLiked: true,
  //   likesCount: 5
  // };

  // task = {
  //   body: '...',
  //   isFulfilled: true,
  //   fulfillmentCount: 7
  // };

  // to receive a simple value as an output from calling event
  // onFavoriteChanged(isFavorite) {
  //   console.log('Favorite changed. isFavorite status: ', isFavorite);
  // }

  // to receive an object as an output from calling event
  // onFavoriteChanged(eventArgs: { newValue: boolean }) {
  onFavoriteChanged( eventArgs: FavoriteChangedEventArgs ) {
    console.log('Favorite changed. isFavorite status: ', eventArgs);
  }
}
