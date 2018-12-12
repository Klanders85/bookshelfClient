import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { BookReviewService } from 'src/app/services/book-review.service';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  listOfBooks;
  constructor(
    private _bookReviewService: BookReviewService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._bookReviewService.getBooks().subscribe(
      (response) => {
        this.listOfBooks = response;
      }
    )
  }

  deleteBook(id: string) {
    this._bookReviewService.deleteBook(id).subscribe(
      (response) => {
        console.log(response);
        this.openSnackBar();
      }
    );
  }

  openSnackBar() {
    this.snackBar.open('Book deleted.', '', {
      duration: 1000
    });
  }
}
