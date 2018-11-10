import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  baseUrl: string = "http://localhost:8080/api";
  postUrl: string = this.baseUrl + "/books";
  constructor(private _http: HttpClient) { }

  addReview(formData): any {
    return this._http.post(this.postUrl, formData);
  }
}
