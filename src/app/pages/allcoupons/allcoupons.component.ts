import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-allcoupons',
  templateUrl: './allcoupons.component.html',
  styleUrls: ['./allcoupons.component.css']
})
export class AllcouponsComponent implements OnInit {
  allCoupons: any[] = [];
  profile = true;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.fetchAllCoupons();

  }

  fetchAllCoupons(){
    this.api.getAllCoupons().subscribe(data => {
      this.allCoupons = data.posts.reverse();
    },
      error => {
        console.error(error)
      });
  }

  deletePost(postId: string) {

    this.api.deletePost(postId).subscribe(data => {
      alert('Product Deleted SuccessFully!')
      window.location.reload();
    },
      error => {
        if (error) {
          alert('Something Went Worng!');
          console.log(error);
        }

      })
  }

}
