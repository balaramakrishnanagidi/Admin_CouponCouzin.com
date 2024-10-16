import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-add-website-popup',
  templateUrl: './add-website-popup.component.html',
  styleUrls: ['./add-website-popup.component.css']
})
export class AddWebsitePopupComponent {
  imagePreview: any;
  website = { Name: '', urlpath: '', image: null };
  constructor(public activeModal: NgbActiveModal) { }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    this.website.image = file;

    //image preview
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  submitForm() {
    this.activeModal.close(this.website);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

}
