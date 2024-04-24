/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Book_controlComponent } from './book_control.component';

describe('Book_controlComponent', () => {
  let component: Book_controlComponent;
  let fixture: ComponentFixture<Book_controlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book_controlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book_controlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
