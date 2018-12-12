import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  baseUrl: string = "http://localhost:8080/api/books/";
  constructor(private _http: HttpClient) { }

  addReview(formData): any {
    return this._http.post(this.baseUrl, formData);
  }

  getBooks() {
    return this._http.get(this.baseUrl);
  }

  deleteBook(id: string) {
    return this._http.delete(this.baseUrl + id)
  }
}
