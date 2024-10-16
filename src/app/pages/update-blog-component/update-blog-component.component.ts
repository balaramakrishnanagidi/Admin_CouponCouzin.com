import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-update-blog-component',
  templateUrl: './update-blog-component.component.html',
  styleUrls: ['./update-blog-component.component.css']
})
export class UpdateBlogComponentComponent implements OnInit {
  blogId: string = '';
  selectedFile: File | null = null;

  editBlogData: any = {
    title: '',
    metaTitle: '',
    metaDescription: '',
    primaryKeyword: '',
    secondaryKeyword: '',
    itemUrl: '',
    coupon: '',
    contents: [{ subheading: '', content: '' }],
    image: ''
  };

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogId = blogId;
      this.loadBlogData(this.blogId);
    } else {
      console.error('Blog ID is null');
    }
  }

  loadBlogData(blogId: string) {
    this.api.fetch_blog_by_id(blogId).subscribe({
      next: (response: any) => {
        if (response?.Status && response?.data) {
          this.editBlogData = response.data[0];
          // Check if the image array exists and is not empty, then assign the first image
          if (response.data.image && Array.isArray(response.data.image) && response.data.image.length > 0) {
            this.editBlogData.image = response.data.image[0];
          } else {
            this.editBlogData.image = null; // Handle the case when there's no image
          }
        } else {
          console.error('Invalid response structure or no data');
        }
      },
      error: (error) => {
        console.error('Error fetching blog data:', error);
      }
    });
  }
  

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  update() {
    const formData = new FormData();  
    formData.append('title', this.editBlogData.title);
    formData.append('metaTitle', this.editBlogData.metaTitle);
    formData.append('metaDescription', this.editBlogData.metaDescription);
    formData.append('primaryKeyword', this.editBlogData.primaryKeyword);
    formData.append('secondaryKeyword', this.editBlogData.secondaryKeyword);
    formData.append('itemUrl', this.editBlogData.itemUrl);
    formData.append('coupon', this.editBlogData.coupon);
  
    // Convert the contents array to JSON and append
    const contentsJSON = JSON.stringify(this.editBlogData.contents);
    formData.append('contents', contentsJSON);
  
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    this.api.update_blog(this.blogId, formData).subscribe(
      response => {
        console.log('Blog updated successfully');
        this.router.navigate(['/blogs']);
      },
      error => {
        console.log('Error updating blog:', error);
      }
    );
  }
  addContent() {
    this.editBlogData.contents.push({ subheading: '', content: '' });
  }

  removeContent(index: number) {
    if (index > 0) {
    this.editBlogData.contents.splice(index, 1);
    }
  }
}
