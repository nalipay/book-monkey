import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() book?: Book;
}
