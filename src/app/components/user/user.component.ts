import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:User;
  dataLoaded = false;
  constructor(
    private authService:AuthService,
    private userService:UserService,
    private localStorageService:LocalStorageService,
    private toastrService:ToastrService,
    private jwtHelperService:JwtHelperService
  ) {  }

  ngOnInit(): void {
    this.getUserById();
  }

  logout(){
    this.localStorageService.remove("token");
    window.location.reload();
    this.toastrService.info("Çıkış yapıldı");
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  getUserById(){
    this.userService.getUserById(this.authService.getCurrentUserId)
    .subscribe(response=>{
      this.user = response.data
      this.dataLoaded = true

    });

  }
}
