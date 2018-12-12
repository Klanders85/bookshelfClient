import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { BookReviewService } from '../../services/book-review.service';


@Component({
  selector: 'book-review-form',
  templateUrl: './book-review-form.component.html',
  styleUrls: ['./book-review-form.component.scss']
})
export class BookReviewFormComponent implements OnInit {
  newBookReviewForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _bookReviewService: BookReviewService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.newBookReviewForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      picture: [''],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
      review: ['', Validators.required]
    });
  }

  get f() {
    return this.newBookReviewForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.newBookReviewForm.invalid) {
      return;
    } else {
      this._bookReviewService.addReview(this.newBookReviewForm.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.newBookReviewForm.reset();
          this.newBookReviewForm.markAsPristine();
          console.log('complete');
          this.snackBar.open('Book review saved!', '', {
            duration: 1000
          })
        }
      )
    }
  }

}
