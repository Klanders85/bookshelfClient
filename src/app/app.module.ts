//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

//3rd party
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Yours
import { AppComponent } from './app.component';
import { BookReviewFormComponent } from './components/book-review-form/book-review-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

const appRoutes: Routes = [
  { path: 'add-book-review', component: BookReviewFormComponent },
  { path: 'books', component: BookListComponent },
  { path: '**', component: BookListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BookReviewFormComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
