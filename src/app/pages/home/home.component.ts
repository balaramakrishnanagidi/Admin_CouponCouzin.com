import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalWebsites: any;
  totalProduct: any;
  newProduct: any;
  totalCoupon: any;
  newCoupon: any;
  
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.totalwebsites();
    this.newProducts();
    this.totalProducts();
    this.totalCoupons();
    this.newCoupons();
    
  }

  totalwebsites(){
    this.api.totalWebsites().subscribe(data => {
       this.totalWebsites = data.count;
      // console.log(this.totalWebsites);
    },error => console.error()
    );
  }
  newProducts(){
    this.api.newProducts().subscribe(data => {
      this.newProduct = data.count;
      // console.log(this.totalPost);
    },error => console.error()
    );
  }
  totalProducts(){
    this.api.totalProducts().subscribe(data => {
      this.totalProduct = data.count;
      // console.log(this.totalPost);
    },error => console.error()
    );
  }
  totalCoupons(){
    this.api.totalCoupons().subscribe(data => {
      this.totalCoupon = data.count;
      // console.log(this.totalPost);
    },error => console.error()
    );
  }
  newCoupons(){
    this.api.newCoupons().subscribe(data => {
       this.newCoupon = data.count;
      // console.log(this.newPost);
    },error => console.error()
    );
  }


}
