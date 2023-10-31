import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Admin';
  constructor(public authService: AuthService){}

  loggedIn = false;
  i = 1;
  ngOnInit(): void {
    this.showLogout();
  }
  
  showLogout(){
    const sessionStorageData = sessionStorage.getItem('authenticated');
    if(sessionStorageData === 'true'){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }

  logout(){
    let userId = sessionStorage.getItem('userId');
    if(userId){
      sessionStorage.clear();
      localStorage.clear();
      window.location.reload();
      this.loggedIn = false;
    }
  }
}
