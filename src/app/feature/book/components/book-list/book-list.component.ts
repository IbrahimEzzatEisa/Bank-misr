import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // main array of book list
  books_list: any[] = [];

  // inject
  constructor(private route: Router) { }

  ngOnInit() {
    //call main function
    this.get_All_Books();
  }

  // get data of books list
  get_All_Books() {
    this.books_list = [
      {
        'id': 1,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },
      {
        'id': 2,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 3,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 4,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 5,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 6,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 7,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 8,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },

      {
        'id': 9,
        'publication': 'Publication Year',
        'tile': 'Book Title ',
        'author': 'Author/s',
        'img': '../../../../../assets/img/pdf.png',
      },
    ];
  }
}



