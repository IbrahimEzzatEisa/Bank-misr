import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { Book_detailsComponent } from '../components/book_details/book_details.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { Author_detailsComponent } from '../components/author_details/author_details.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },

      { path: 'list', component: BookListComponent },
      {
        path: 'view/:bookName',
        component: Book_detailsComponent,

      },
      {
        path: 'authors/:authorName',
        component: Author_detailsComponent,

      },

      {
        path: 'wish-list',
        component: WishListComponent,

      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }
