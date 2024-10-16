import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  comments: any = [];
  blogId: string = '';
  blogData: any[] = [];
  profile: boolean = true;
  commentsMap: Map<string, any[]> = new Map();

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.fetch_blogs().subscribe((response: any) => {
      if (response.Status && response.data) {
        this.blogData = response.data;
        this.blogData = this.blogData.reverse();
      }
    },
      error => {
        console.log(error);
      });
  }

  edit_blog(blogId: string) {
    this.router.navigate(['/update_blog', blogId]);
  }

  delete_blog(blogId: string) {
    this.api.deleteBlog(blogId).subscribe(response => {
      window.location.reload();
    },
      error => {
        console.log(error);

      })
  };

}