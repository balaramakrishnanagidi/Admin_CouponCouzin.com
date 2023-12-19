import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWebsitePopupComponent } from './shared/components/add-website-popup/add-website-popup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { LoginComponent } from './pages/login/login.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { authGuard } from './shared/service/auth.guard';
import { AllcouponsComponent } from './pages/allcoupons/allcoupons.component';
import { GetCouponsComponent } from './pages/get-coupons/get-coupons.component';
import { PostersComponent } from './pages/posters/posters.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';

const routes: Routes = [
  
  {path:'home', component: HomeComponent, canActivate: [authGuard]},
  {path:'addWebsite', component: AddWebsitePopupComponent, canActivate: [authGuard]},
  {path:'websites', component: WebsitesComponent, canActivate: [authGuard]},
  {path:'products', component: ProductsComponent, canActivate: [authGuard]},
  {path: 'allproducts', component: AllProductsComponent, canActivate: [authGuard]},
  {path: 'allcoupons', component: AllcouponsComponent, canActivate: [authGuard]},
  {path: 'getcoupons/:category', component: GetCouponsComponent, canActivate: [authGuard]},
  {path: 'posters', component: PostersComponent, canActivate: [authGuard]},
  {path: 'blogs', component: BlogsComponent, canActivate: [authGuard]},
  {path: 'createblog', component: CreateblogComponent, canActivate: [authGuard]},
  {path:'', pathMatch: 'full', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
