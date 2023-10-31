import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit{
  websiteId: string = '';
  Name: string = '';
  itemPrice: any;
  itemCategory: string = '';
  itemSubcategory: string = '';
  itemQuantity: number = 0;
  
  constructor(private api: ApiService,
              private route: ActivatedRoute, 
              private router: Router){}
  websites: any[] = [];
  profile = true;

  ngOnInit(): void {
    this.fetchAllWebsites();
    this.route.params.subscribe(params => {
      this.websiteId = params['id'];
    });
}

  fetchAllWebsites(): void {
    
    this.api.getAllWebsites().subscribe(
      (response) => {
        if (response.Status) {
          this.websites = response.data;
          console.log(this.websites);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  } 

  // delete Item
  deleteItem(websiteId: string){
    this.api.deleteWebsite(websiteId).subscribe(() =>{
      alert("Item deleted sucessfully!");
      console.log("Item deleted sucessfully!");
      this.websites = this.websites.filter(post => post.id !== websiteId);
      console.log(websiteId);
      window.location.reload();
    },error => {
      console.error("error deleting the item: ");
    }
     )
  };

  }

