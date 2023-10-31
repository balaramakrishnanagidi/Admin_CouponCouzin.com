import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-get-coupons',
  templateUrl: './get-coupons.component.html',
  styleUrls: ['./get-coupons.component.css']
})
export class GetCouponsComponent implements OnInit {
  category: string = '';
  coupons: any[] = [];

  constructor(private api: ApiService, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the category value from the URL
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      // Use the category to fetch data from the API and populate your table
      this.api.couponBycategory(this.category).subscribe(
        (data: any) => {
          console.log(data)
          if (data) {
            this.coupons = data.posts;
            console.log(this.coupons);
          } else {
            console.error('Invalid response from the API.');
          }
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    });
  }

  deletePost(postId: string) {
    this.api.deletePost(postId).subscribe(
      () => {
        alert('Coupon Deleted Successfully!');
        // Remove the deleted coupon from this.coupons
        this.coupons = this.coupons.filter((coupon) => coupon._id !== postId);
      },
      (error) => {
        if (error) {
          alert('Something Went Wrong!');
          console.log('Error:', error);
        }
      }
    );
  }
}
