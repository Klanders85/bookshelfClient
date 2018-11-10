import { TestBed } from '@angular/core/testing';

import { BookReviewService } from './book-review.service';

describe('BookReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookReviewService = TestBed.get(BookReviewService);
    expect(service).toBeTruthy();
  });
});
