import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddCouponPopupComponent } from 'src/app/shared/components/add-coupon-popup/add-coupon-popup.component';
import { AddPosterPopupComponent } from 'src/app/shared/components/add-poster-popup/add-poster-popup.component';
import { AddProductPopupComponent } from 'src/app/shared/components/add-product-popup/add-product-popup.component';
import { AddWebsitePopupComponent } from 'src/app/shared/components/add-website-popup/add-website-popup.component';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isSideNavOpen = false;


  constructor(
    private modalService: NgbModal,
    private api: ApiService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  openNav() {
    const sessionStorageData = sessionStorage.getItem('authenticated');
    if (sessionStorageData === 'true') {
      this.isSideNavOpen = true;
    } else {
      this.isSideNavOpen = false;
    }
  }
  closeNav() {
    this.isSideNavOpen = false;
  }



  //poster
  openAddPosterpopup() {
    const modalRef = this.modalService.open(AddPosterPopupComponent, {
      size: 'md'
    });

    modalRef.result.then((formData) => {
      if (formData) {
        this.addPoster(formData);
      }
    });

  }

  private addPoster(posterData: any) {
    this.api.addPoster(posterData).subscribe(
      (response) => {
        alert('Poster added successfully!')
      },
      (error) => {
        console.error(error)
        alert('Both image and URL are required.');

      }
    );
  }


  //website
  openAddWebsitePopup() {
    const modalRef = this.modalService.open(AddWebsitePopupComponent, {
      size: 'lg'
    });

    modalRef.result.then((result) => {
      if (result) {
        this.addWebsite(result);
      }
    });

  }

  private addWebsite(websiteData: any) {
    const formData = new FormData();
    // console.log('sidenav - addwebsite() - formdata' + formData) //debug
    formData.append('Name', websiteData.Name);
    formData.append('urlpath', websiteData.urlpath);
    formData.append('image', websiteData.image);
    // console.log('sidenav - addwebsite() - webData' + websiteData) //debug
    this.api.addWebsite(formData).subscribe(
      (response) => {
        alert(response.message)
        console.log('Website added successfully:', response);

      },
      (error) => {
        console.error(error)
        alert("Attempt failed, try again.");

      }
    );
  }

  //add product
  openAddProductPopup() {
    const modalRef = this.modalService.open(AddProductPopupComponent, {
      size: 'lg'
    });

    modalRef.result.then((result) => {
      if (result) {
        // console.log(result) //DEBUG
        this.addProduct(result);
      }
    });
  }
  private addProduct(ProductData: any) {
    const formData1 = new FormData();
    formData1.append('Name', ProductData.Name);
    formData1.append('urlpath', ProductData.urlpath);
    formData1.append('postimage', ProductData.image);
    formData1.append('price', ProductData.price);
    formData1.append('discount', ProductData.discount);
    formData1.append('maincategory', ProductData.maincategory);
    formData1.append('categorys', ProductData.subcategory);
    formData1.append('company', ProductData.company);
    formData1.append('status', ProductData.status);




    this.api.addProduct(formData1).subscribe(
      (response) => {
        alert(response.message)
        console.log('Product added successfully:', response);
        this.router.navigate(['/allproducts']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // implementaion for products
  selectedFoodCategory: string = '';
  selectedFashionCategory: string = '';
  selectedTravelCategory: string = '';
  selectedTvCategory: string = '';
  selectedMobilesCategory: string = '';
  selectedBeautyCategory: string = '';
  selectedComputerCategory: string = '';
  selectedRechargeCategory: string = '';
  selectedAppliancesCategory: string = '';
  selectedEntertainmentCategory: string = '';
  selectedCameraCategory: string = '';
  selectedKidsCategory: string = '';

  selectedCategories: any[] = []; // Array to store selected categories
  fetchedData: any[] = [];

  storeSelectedCategory(maincategory: string, categorys: string) {
    // Clear the existing array and add the latest selection
    this.selectedCategories = [{ maincategory, categorys }];

    // Fetch data from API based on the selected category
    this.api.AllProducts(this.selectedCategories[0]).subscribe(
      (data) => {
        // console.log(data.posts);
        this.fetchedData = data.posts;
        this.router.navigate(['/products'], { queryParams: { fetchedData: JSON.stringify(this.fetchedData) } });

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


    // console.log(this.selectedCategories[0]); //debug
  }

  //add coupon
  openAddCouponPopup() {
    const modalRef = this.modalService.open(AddCouponPopupComponent, {
      size: 'lg'
    });

    modalRef.result.then((result) => {
      if (result) {
        // console.log(result) //DEBUG
        this.addCoupon(result);
      }
    });
  }

  private addCoupon(couponData: any) {
    this.api.addCoupon(couponData).subscribe(
      (response) => {
        alert(response.message)
        console.log('Coupon added successfully:', response);
        this.router.navigate(['/allcoupons']);
      },
      (error) => {
        if (error) {
          alert('Something went wrong!')
        }
        console.log(error);
      }
    );
  }

  // //implementaion for Coupons


  selectedCouponCategories: any[] = []; // Array to store selected categories
  fetchedCouponData: any[] = [];

  storeSelectedCoupon(maincategory: string, categorys: string) {
    // Clear the existing array and add the latest selection
    this.selectedCouponCategories = [{ maincategory, categorys }];

    // Fetch data from API based on the selected category
    this.api.AllProducts(this.selectedCouponCategories[0]).subscribe(
      (data) => {
        // console.log(data.posts);
        this.fetchedCouponData = data.posts;
        this.router.navigate(['/allcoupons'], { queryParams: { fetchedCouponData: JSON.stringify(this.fetchedCouponData) } });

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  //get coupons on button click

  buttonValue: string = '';
  // coupons: any[] = [];
  assignValueToVariable(value: string) {
    this.buttonValue = value;
    this.router.navigate(['/getcoupons', value]);

  }


}
