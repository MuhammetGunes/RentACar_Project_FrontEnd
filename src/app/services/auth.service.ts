import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/registerModel';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44340/api/auth/"
  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService, private jwtHelperService:JwtHelperService) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login" , loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  get getDecodedToken() {
    let token = this.localStorageService.getItem("token");
    return this.jwtHelperService.decodeToken(token);
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodedToken;
    let userIdString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/nameidentifier')
    )[0];
    let userId: number = decodedToken[userIdString];
    return userId;
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post(this.apiUrl+"register",registerModel)
  }
}
