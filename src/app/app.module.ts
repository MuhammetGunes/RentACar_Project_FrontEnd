import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorComponent } from './components/color/color/color.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/navi/navi/navi.component';
import { CarDetailComponent } from './components/carDetail/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { FilterCarPipePipe } from './components/pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './components/pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './components/pipes/filter-color-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
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
    RentalAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    PaymentComponent,
    PaymentAddComponent,
    LoginComponent,
    RegisterComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    CarUpdateComponent,
    UserComponent,
    FooterComponent,
    ContactUsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  },
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
