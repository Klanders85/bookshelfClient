import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _bookReviewService: BookReviewService
  ) { }

  ngOnInit() {
    this.newBookReviewForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      picture: ['', Validators.required],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
      review: ['', Validators.required]
    });
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
        }

      )
    }
  }

}
