import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44340/api/"

  constructor(private httpClient:HttpClient) { }

  updateUserNames(user:User){
    let newUrl = this.apiUrl + "users/update";
    return this.httpClient.post<ResponseModel>(newUrl,user);
  }

  getUserById(id:number):Observable<SingleResponseModel<User>>{
    let newUrl = this.apiUrl + "users/getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<User>>(newUrl);
  }
}
