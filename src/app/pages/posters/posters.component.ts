import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {

  constructor(private api: ApiService){}

  profile = true;
  posterImage: any[] = [];

  ngOnInit(): void {
    this.getAllPosters();
  }

  getAllPosters(){
    this.api.getAllPosters().subscribe( data => {
      this.posterImage = data.banner;
    },error => {
      console.log(error);
    }
    );
  }

  // delete Item
  deleteItem(imageId: string){
    this.api.deletePoster(imageId).subscribe(() =>{
      console.log(imageId);
      alert("Poster deleted sucessfully!");
      window.location.reload();
    },error => {
      console.error("error deleting the Poster: ");
    }
     )
  };
}
