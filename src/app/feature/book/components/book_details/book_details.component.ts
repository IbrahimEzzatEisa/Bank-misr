import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-book_details',
  templateUrl: './book_details.component.html',
  styleUrls: ['./book_details.component.css'],
})
export class Book_detailsComponent implements OnInit {
  //  main view
  isAuthorView = false;
  ViewId;

  // array of wish list of localStorage
  existingArrayString: any;
  existingArray: any

  // add mode
  addMode: boolean;

  constructor(private active_router: ActivatedRoute) {
    this.active_router.data.subscribe((data) => {
      this.isAuthorView = Boolean(data['isAuthors']);
      this.ViewId = this.active_router.snapshot.paramMap.get('id');
    });
  }

  ngOnInit() {
    this.existingArrayString = localStorage.getItem('WishList');
    // Retrieve the existing array from local storage
    this.existingArray = this.existingArrayString
      ? JSON.parse(this.existingArrayString)
      : [];


    if (this.existingArray != null || []) {
      let isFound = this.existingArray?.some((element: any) => {
        if (element.id === this.ViewId) {
          return true;
        } else {
          return false;
        }
      });
      if (isFound) {
        this.addMode = false;
      } else {
        this.addMode = true;
      }
    }
  }

  // add or remove  of local storage
  addRemoveToWishList() {
    // Retrieve the existing array from local storage

    if (this.addMode) {

      // Create a new object to push into the array
      const newObj = { id: this.ViewId };

      // Push the new object into the existing array
      this.existingArray.push(newObj);

      // Store the updated array back into local storage
      localStorage.setItem('WishList', JSON.stringify(this.existingArray));
      this.addMode = false;
      Swal.fire({
        position: "top-end",
        text: "Added successfully to wish list ",
        showConfirmButton: false,
        timer: 1500
      });


    } else {

      // Find the index of the object you want to remove
      const indexToRemove = this.existingArray.findIndex(obj => obj.id === this.ViewId);

      if (indexToRemove !== -1) {
        // Remove the object from the array
        this.existingArray.splice(indexToRemove, 1);

        // Store the updated array back into local storage
        this.addMode = true
        localStorage.setItem('WishList', JSON.stringify(this.existingArray));
        Swal.fire({
          position: "top-end",
          text: "Removed successfully from wish list ",
          showConfirmButton: false,
          timer: 1500
        });


      }


    }
  }
}
