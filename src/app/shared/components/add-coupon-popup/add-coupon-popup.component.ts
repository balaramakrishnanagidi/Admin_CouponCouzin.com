// Define the structure of subcategories
interface Subcategory {
  id: number;
  name: string;
}

// Define the structure of category-subcategory mapping
interface CategorySubcategories {
  [category: string]: Subcategory[];
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-add-coupon-popup',
  templateUrl: './add-coupon-popup.component.html',
  styleUrls: ['./add-coupon-popup.component.css']
})
export class AddCouponPopupComponent {

  
  coupon = { Name: '',
             urlpath: '',
             couponcode: '',
             maincategory: '',
             categorys: '',
             company: '',
             description: '', 
             status: '' };
  websites: any[] = [];
  subcategories: any[] = [];          

  constructor(
    public activeModal: NgbActiveModal,
    private api: ApiService,
    private router: Router  ) { }

  ngOnInit(): void {
    this.fetchWebsites();
  }
  // get website data to the dropdown
  fetchWebsites(){
    this.api.getAllWebsites().subscribe(data =>{
      this.websites = data.data;
    },error => {
      console.error('Error fetching companies:', error);
    }
    );
  }

  //categories data
   
  categorySubcategories: CategorySubcategories = {
    food: [
        { id: 1, name: 'food_ordering' },
        { id: 2, name: 'drinks&beverages' },
        { id: 3, name: 'pizza' },
        { id: 4, name: 'grocery' },
        { id: 5, name: 'restaurents' }
      ],
      fashion: [
        { id: 6, name: 'clothing' },
        { id: 7, name: 'footwear' },
        { id: 8, name: 'bags&accessories' },
        { id: 9, name: 'watch&sunglasses' },
        { id: 10, name: 'travel_accessories' },
        { id: 11, name: 'lingerie' }
      ],
      travel: [
        { id: 12, name: 'flight' },
        { id: 13, name: 'hotel' },
        { id: 14, name: 'bus' },
        { id: 15, name: 'cabs' },
        { id: 16, name: 'car_rentals' },
        { id: 17, name: 'railway_bookings' },
        { id: 18, name: 'self_drive_cars' },
        { id: 19, name: 'holiday' }
      ],
      tv: [
        { id: 20, name: 'on_demand_content' },
        { id: 21, name: 'televisions' },
        { id: 22, name: 'movies&tv_shows' },
        { id: 23, name: 'audio&video' },
        { id: 24, name: 'cables&accessories' },
        { id: 25, name: 'music' },
        { id: 26, name: 'DTH&internet_providers' }
      ],
      mobiles: [
        { id: 27, name: 'mobiles&tablet_accessories' },
        { id: 28, name: 'mobile' },
        { id: 29, name: 'tablet' }
      ],
      beauty: [
        { id: 30, name: 'personal_care&beauty' },
        { id: 31, name: 'makeup&cosmotics' },
        { id: 32, name: 'perfumes&deos' },
        { id: 33, name: 'nutrition' },
        { id: 34, name: 'medicines&health_checkups' },
        { id: 35, name: 'health_devices' },
        { id: 36, name: 'eyewear' }
      ],
      computer: [
        { id: 37, name: 'computer_accessories' },
        { id: 38, name: 'laptops_monitors&desktops' },
        { id: 39, name: 'gaming' },
        { id: 40, name: 'software' }
      ],
      recharge: [
        { id: 41, name: 'mobile_recharge' },
        { id: 42, name: 'bill_payments' },
        { id: 43, name: 'DTH' }
      ],
      appliances: [
        { id: 44, name: 'home_aplliances' },
        { id: 45, name: 'kitchen' },
        { id: 46, name: 'personal_care' },
        { id: 47, name: 'cleaning_accessories' }
      ],
      entertainment: [
        { id: 48, name: 'movie_tickets' },
        { id: 49, name: 'streaming_music' },
        { id: 50, name: 'theme_parks' },
        { id: 51, name: 'indoor&outdoor_games' },
        { id: 52, name: 'online_games' },
        { id: 59, name: 'ott' }        
      ],
      camera: [
        { id: 53, name: 'cameras' },
        { id: 54, name: 'camers_accessories' }
      ],
      kids: [
        { id: 55, name: 'baby_products' },
        { id: 56, name: 'apparel&accessories' },
        { id: 57, name: 'toys&games' },
        { id: 58, name: 'school_essentials' }
      ]
      // Add more category-subcategory mappings
    };

  
  categoryChange() {
    const selectedCategory = this.coupon.maincategory;
    this.subcategories = this.categorySubcategories[selectedCategory] || [];
  }




  // handleImageUpload(event: any) {
  //   const file = event.target.files[0];
  //   this.product.image = file;

  //   //image preview
  //   const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //           this.imagePreview = e.target.result;
  //       };
  //       reader.readAsDataURL(file);
  // }

  submitForm(){
    this.activeModal.close(this.coupon);
    // window.location.reload();
    
    this.router.navigate(['/home']);
  }


}
