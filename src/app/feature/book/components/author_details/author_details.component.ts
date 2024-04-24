import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './service/author.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-author_details',
  templateUrl: './author_details.component.html',
  styleUrls: ['./author_details.component.css'],
})
export class Author_detailsComponent implements OnInit {
  //  main view
  AuthorName;
  authObj;


  // injection 
  constructor(
    private active_router: ActivatedRoute,
    private author_Ser: AuthorService,
    private spinner: NgxSpinnerService

  ) {
    this.AuthorName = this.active_router.snapshot.paramMap.get('authorName');
  }

  ngOnInit() {
    //call main function
    this.getAuthor();
  }
  // get data of author selected  list
  getAuthor() {
    this.spinner.show();
    this.author_Ser.getAuthorInfo(this.AuthorName).subscribe(
      (res) => {
        this.authObj = res.docs[0];
        this.spinner.hide();

      },
      (err) => {
        console.error(err);
        this.spinner.hide();

      }
    );
  }
}


