import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car/car.component';
import { CarDetailComponent } from './components/carDetail/car-detail/car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/all-brands", component:CarComponent},
  {path:"cars/colors/all-colors", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/carDetail/:carId", component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
