import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Book_controlComponent } from './components/book_control/book_control.component';

@NgModule({
  declarations: [NavbarComponent, Book_controlComponent],

  imports: [CommonModule, RouterModule],

  exports: [NavbarComponent, Book_controlComponent],
})
export class ShellModule { }
