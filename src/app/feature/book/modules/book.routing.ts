import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { Book_detailsComponent } from '../components/book_details/book_details.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { WishListComponent } from '../components/wish-list/wish-list.component';

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
        path: 'view/:id',
        component: Book_detailsComponent,
        data: {
          isAuthors: false,
        },
      },
      {
        path: 'authors/:id',
        component: Book_detailsComponent,
        data: {
          isAuthors: true,
        },
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
