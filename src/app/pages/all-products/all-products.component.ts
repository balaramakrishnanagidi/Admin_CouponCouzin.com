import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allProducts: any[] = [];
  profile = true;
  constructor(private api: ApiService,
              private router: Router,
              private toastrService: ToastrService
              )
              {
                this.toastrService.toastrConfig.positionClass = 'toast-top-right';
              }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(){
    this.api.getAllProducts().subscribe(data => {
      this.allProducts = data.posts.reverse();
    },
    error => {
      console.error(error)
    });
  }

  deletePost(postId: string) {

    this.api.deletePost(postId).subscribe(data => {
      // console.log(data);
      // alert('Product Deleted SuccessFully!')
      // this.toastrService.success('success!', 'post deleted successfully')
      this.router.navigate(['/allproducts']);
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
