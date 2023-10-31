import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fetchedData: any[] = [];
  profile = true;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const fetchedDataStr = params['fetchedData'];
      if (fetchedDataStr) {
        this.fetchedData = JSON.parse(fetchedDataStr);
      }

    });

  }

  deletePost(postId: string) {

    this.api.deletePost(postId).subscribe(data => {
      console.log(data);
      alert('Product Deleted SuccessFully!')
      this.router.navigate(['/allproducts']);
    },
      error => {
        if (error) {
          alert('Something Went Worng!');
          console.log(error);
        }

      })
  }

  toggleStatus(productId: string, currentStatus: string) {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    this.api.updateProductStatus(productId, newStatus).subscribe(
      (data) => {
        console.log(data);
        // Update the status in the fetchedData array
        const productToUpdate = this.fetchedData.find((item) => item._id === productId);
        if (productToUpdate) {
          productToUpdate.status = newStatus;
        }
      },
      (error) => {
        if (error) {
          // alert('Something Went Wrong!');
          console.log(error);
        }
      }
    );
  }

}
