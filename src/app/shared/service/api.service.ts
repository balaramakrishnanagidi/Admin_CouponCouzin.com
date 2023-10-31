import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // private baseurl = 'https://16.171.244.75:2023';
  // private baseurl = 'https://192.168.0.128:2023';
  private baseurl = 'http://couponcouzin.com:2022';


  //post

  couponBycategory(category: string): Observable<any> {
    console.log(category)
    return this.http.get(`${this.baseurl}/getcoupons/${category}`,)
  }

  addCoupon(coupon: any): Observable<any> {
    const data = coupon;
    return this.http.post(`${this.baseurl}/addcoupon`, data);
  }

  addWebsite(website: FormData): Observable<any> {
    return this.http.post(`${this.baseurl}/addwebsite`, website);
  }

  addPoster(poster: FormData): Observable<any> {
    return this.http.post(`${this.baseurl}/banner`, poster);
  }

  addProduct(product: FormData): Observable<any> {
    return this.http.post(`${this.baseurl}/post`, product);
  }
  AllProducts(selected: any[]): Observable<any> {
    return this.http.post(`${this.baseurl}/getallcategories`, selected)
  }
  adminLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseurl}/login`, { email, password })
  }

  //get
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseurl}/allproducts`);
  }

  getAllWebsites(): Observable<any> {
    return this.http.get(`${this.baseurl}/getallwebsites`);
  }

  getAllPosters(): Observable<any> {
    return this.http.get(`${this.baseurl}/getallbanner`);
  }

  getAllCoupons(): Observable<any> {
    return this.http.get(`${this.baseurl}/getallcoupons`);
  }



  totalWebsites(): Observable<any> {
    return this.http.get(`${this.baseurl}/totalwebsites`);
  }

  totalProducts(): Observable<any> {
    return this.http.get(`${this.baseurl}/totalproducts`);
  }

  newProducts(): Observable<any> {
    return this.http.get(`${this.baseurl}/newproductcount`);
  }


  totalCoupons(): Observable<any> {
    return this.http.get(`${this.baseurl}/totalCoupons`);
  }

  newCoupons(): Observable<any> {
    return this.http.get(`${this.baseurl}/newcouponcount`);
  }

  //put

  updateProductStatus(postId: string, status: string): Observable<any> {
    const body = { postId, status };
    return this.http.put(`${this.baseurl}/statusupdate/${postId}`, body);
  }

  //delete
  deletePoster(posterId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/deletebanner/${posterId}`)
  }
  deleteWebsite(websiteId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/deletewebsite/${websiteId}`)
  }
  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/deletepost/${postId}`)
  }
}
