/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Book_detailsService } from './book_details.service';

describe('Service: Book_details', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Book_detailsService]
    });
  });

  it('should ...', inject([Book_detailsService], (service: Book_detailsService) => {
    expect(service).toBeTruthy();
  }));
});
