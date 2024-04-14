import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() leave = new EventEmitter<void>();

  doLeave() {
    this.leave.emit();
  }
}
