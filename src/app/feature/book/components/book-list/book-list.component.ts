import { Component, OnInit } from '@angular/core';
import { BookListService } from './services/book-list.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  // page title
  title = 'Finance';

  // main array of book list
  books_list: any[] = [];

  // inject
  constructor(
    private book_list_service: BookListService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    //call main function
    this.get_All_Books();
  }

  // get data of books list
  get_All_Books() {
    this.spinner.show();
    this.book_list_service.getBooks().subscribe(
      (res) => {
        this.books_list = res.docs;
        this.spinner.hide();

      },
      (err) => {
        console.error(err);
        this.spinner.hide();

      }
    );
  }
}
