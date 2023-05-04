import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorComponent } from './components/color/color/color.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/navi/navi/navi.component';
import { CarDetailComponent } from './components/carDetail/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { FilterCarPipePipe } from './components/pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './components/pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './components/pipes/filter-color-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    NaviComponent,
    CarDetailComponent,
    CarImageComponent,
    FilterCarPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
