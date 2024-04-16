import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  // array of wish list of localStorage
  existingArrayString: any;
  existingArray: any;

  constructor() { }

  ngOnInit() {
    this.existingArrayString = localStorage.getItem('WishList');
    // Retrieve the existing array from local storage
    this.existingArray = this.existingArrayString
      ? JSON.parse(this.existingArrayString)
      : [];
  }

  //  remove  of local storage
  removeToWishList(SelectedId) {
    // Find the index of the object you want to remove
    const indexToRemove = this.existingArray.findIndex(
      (obj) => obj.id === SelectedId
    );

    if (indexToRemove !== -1) {
      // Remove the object from the array
      this.existingArray.splice(indexToRemove, 1);

      // Store the updated array back into local storage
      localStorage.setItem('WishList', JSON.stringify(this.existingArray));
      Swal.fire({
        position: 'top-end',
        text: 'Removed successfully from wish list ',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
