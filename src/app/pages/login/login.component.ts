import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  userId: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }
 
  
  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => { // specify the type of response
        sessionStorage.setItem("userId", response.user._id);
        this.userId = sessionStorage.getItem("userId") ?? '';
        this.authService.setAuthenticated(this.userId);
        this.password = '';
        this.router.navigate(['/home']).then( () => {
          window.location.reload();
        } );
        
      },
      (error: any) => {
        if (error) {
          alert('Only Admin credentials are accepted');
        }
        console.error(error);
      }
    );
  }
}
