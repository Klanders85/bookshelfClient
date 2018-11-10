import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookReviewService } from './services/book-review.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newBookReviewForm: FormGroup;
  submitted: boolean = false;

  title = "Welcome to Bookshelf";

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

  onSubmit(formValues) {
    this.submitted = true;
    // let cleanFormData = {
    //   title: this.newBookReviewForm.controls.title.value,
    //   author: this.newBookReviewForm.controls.author.value,
    //   picture: this.newBookReviewForm.controls.picture.value,
    //   description: this.newBookReviewForm.controls.description.value,
    //   published: this.newBookReviewForm.controls.published.value,
    //   review: this.newBookReviewForm.controls.review.value
    // }
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
