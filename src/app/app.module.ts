import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { AddWebsitePopupComponent } from './shared/components/add-website-popup/add-website-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WebsitesComponent } from './pages/websites/websites.component';
import { AddProductPopupComponent } from './shared/components/add-product-popup/add-product-popup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ApiService } from './shared/service/api.service';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { LoginComponent } from './pages/login/login.component';
import { AddCouponPopupComponent } from './shared/components/add-coupon-popup/add-coupon-popup.component';
import { AllcouponsComponent } from './pages/allcoupons/allcoupons.component';
import { GetCouponsComponent } from './pages/get-coupons/get-coupons.component';
import { AddPosterPopupComponent } from './shared/components/add-poster-popup/add-poster-popup.component';
import { PostersComponent } from './pages/posters/posters.component';
import { ToastrModule } from 'ngx-toastr';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';
import { UpdateBlogComponentComponent } from './pages/update-blog-component/update-blog-component.component';






@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AddWebsitePopupComponent,
    WebsitesComponent,
    AddProductPopupComponent,
    HomeComponent,
    ProductsComponent,
    AllProductsComponent,
    LoginComponent,
    AddCouponPopupComponent,
    AllcouponsComponent,
    GetCouponsComponent,
    AddPosterPopupComponent,
    PostersComponent,
    BlogsComponent,
    CreateblogComponent,
    UpdateBlogComponentComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    ReactiveFormsModule
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
