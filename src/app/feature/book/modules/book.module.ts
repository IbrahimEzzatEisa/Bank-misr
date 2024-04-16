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
    FilterByNameAndTypePipe,


  ],


})
export class BookModule { }
