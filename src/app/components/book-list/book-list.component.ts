import { Component, OnInit } from '@angular/core';
import { BookReviewService } from 'src/app/services/book-review.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  listOfBooks;
  constructor(private _bookReviewService: BookReviewService) { }

  ngOnInit() {
    this._bookReviewService.getBooks().subscribe(
      (response) => {
        this.listOfBooks = response;
      }
    )
  }

}
