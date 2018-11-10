import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newBookReviewForm: FormGroup;
  submitted: boolean = false;

  title = "Welcome to Bookshelf";

  constructor(private formBuilder: FormBuilder) { }

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
  }
}
