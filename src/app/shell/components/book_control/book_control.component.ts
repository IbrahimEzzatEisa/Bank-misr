import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book_control',
  templateUrl: './book_control.component.html',
  styleUrls: ['./book_control.component.css']
})
export class Book_controlComponent implements OnInit {

  // box info 
  @Input() id: any;
  @Input() img: any;
  @Input() publication: any;
  @Input() title: any;
  @Input() author: any;
  @Input() wishlist: any

  // event emitter
  @Output() valueChangeModel: EventEmitter<any> = new EventEmitter<any>();


  // button title
  more_title = "more";
  Wishlist_title = "Wishlist"


  constructor() { }

  ngOnInit() {
  }

  // remove wish list 
  RemoveWishList(event) {
    this.valueChangeModel.emit(event);
  }

}
