import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Book_detailsComponent } from '../components/book_details/book_details.component';
import { ShellModule } from 'src/app/shell/shell.module';
import { BookListComponent } from '../components/book-list/book-list.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { FilterByNameAndTypePipe } from 'src/app/shell/pipes/filterByNameAndType.pipe';
import { FormsModule } from '@angular/forms';
import { Author_detailsComponent } from '../components/author_details/author_details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    ShellModule,
    FormsModule

  ],
  declarations: [
    BookComponent,
    BookListComponent,
    Book_detailsComponent,
    WishListComponent,
    Author_detailsComponent,
    FilterByNameAndTypePipe,


  ],


})
export class BookModule { }
