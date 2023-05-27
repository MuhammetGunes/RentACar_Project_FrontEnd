import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car/car.component';
import { CarDetailComponent } from './components/carDetail/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/brands/all-brands", component:CarComponent},
  {path:"cars/colors/all-colors", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/carDetail/:carId", component:CarDetailComponent},
  {path:"rentals/add", component:RentalAddComponent},
  {path:"rentals/getrental", component:RentalComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"colors/add", component:ColorAddComponent},
  {path:"payments/pay", component:PaymentAddComponent},
  {path:"payments/getall", component:PaymentComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
