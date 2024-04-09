import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
    this.book = book;
  }
}
