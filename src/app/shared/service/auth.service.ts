import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private userId = '';

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUserId(): string {
    return this.userId;
  }

  // login api
  private baseUrl = 'http://couponcouzin.com:2022';

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    console.log(email + ' ' + password);
    
    // Make the HTTP POST request to the login endpoint
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  setAuthenticated(userId: string): void {
    this.authenticated = true;
    this.userId = userId;
    // Store the authentication state and user ID in session storage
    sessionStorage.setItem('authenticated', 'true');
    sessionStorage.setItem('userId', userId);
  }

  logout(): void {
    this.authenticated = false;
    this.userId = '';
    
    // Remove authentication state and user ID from session storage
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('userId');
    
  }
}
