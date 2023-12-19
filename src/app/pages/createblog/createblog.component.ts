import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent {

  myForm!: FormGroup;

  constructor(  private fb: FormBuilder, 
                private api: ApiService, 
                private router: Router  ) { }

  ngOnInit() {
    this.createForm();
    if (this.subheadingsAndContents.length === 0) {
      this.addSubheadingAndContent();
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      coupon: [false, Validators.required],
      itemUrl: ['', Validators.required],
      subheadingsAndContents: this.fb.array([]),
      image: [null, Validators.required],
    });
  }

  get subheadingsAndContents(): FormArray {
    return this.myForm.get('subheadingsAndContents') as FormArray;
  }

  getSubheadingControl(index: number): FormControl {
    return this.subheadingsAndContents.at(index).get('subheading') as FormControl;
  }

  getContentControl(index: number): FormControl {
    return this.subheadingsAndContents.at(index).get('content') as FormControl;
  }

  addSubheadingAndContent() {
    const newGroup = this.fb.group({
      subheading: ['', Validators.required],
      content: ['', Validators.required],
    });

    this.subheadingsAndContents.push(newGroup);
  }

  removeSubheadingAndContent(index: number) {
    this.subheadingsAndContents.removeAt(index);
  }

  autoResize(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.myForm.patchValue({
        image: file,
      });
    }
  }

  getImagePreview(): string | null {
    const fileInput = this.myForm.get('image');
    if (fileInput && fileInput.value) {
      const file = fileInput.value as File;
      return URL.createObjectURL(file);
    }

    return null;
  }

  submitForm() {
   if (this.myForm.valid) {
      const formData = new FormData();
  
      formData.append('title', this.myForm.get('title')!.value);
      formData.append('coupon', this.myForm.get('coupon')!.value);
      formData.append('itemUrl', this.myForm.get('itemUrl')!.value);
      formData.append('image', this.myForm.get('image')!.value);
  
      const subheadingsAndContentsArray = this.subheadingsAndContents.value.map((item: any) => ({
        subheading: item.subheading,
        content: item.content,
      }));
  
      // Convert array to JSON string and append as a single field
      formData.append('contents', JSON.stringify(subheadingsAndContentsArray));
      console.log(formData.get('contents'));
      
      this.api.post_blog(formData).subscribe(
        (response) => console.log({ message: 'form submitted!', response }),
        (error) => console.log(error)
      );
    }
    this.router.navigate(['/blogs']);
  }
  
}
