import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-poster-popup',
  templateUrl: './add-poster-popup.component.html',
  styleUrls: ['./add-poster-popup.component.css']
})
export class AddPosterPopupComponent {
  imagePreview: any;
  poster = { image: null, url: '' };
  
  constructor( public activeModal: NgbActiveModal ) { }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    this.poster.image = file;

    //image preview
    // const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //         this.imagePreview = e.target.result;
    //     };
    //     reader.readAsDataURL(file);
  }
  submitForm() {
    if (this.poster.image && this.poster.url) {
      const formData = new FormData();
      formData.append('image', this.poster.image);
      formData.append('url', this.poster.url);
      this.activeModal.close(formData);
    } else {
      // Handle the case where either image or URL is missing
      alert('Both image and URL are required.');
    }
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  }

}