import { Component, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent{

  user:User;
  dataLoaded = false;

  constructor(
    private authService:AuthService,
    private userService:UserService,
    private localStorageService:LocalStorageService,
    private toastrService:ToastrService
  ) {  }

  ngOnInit(): void {

  }

  logout(){
    this.localStorageService.remove("token");
    window.location.reload();
    this.toastrService.info("Çıkış yapıldı");
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset == 0) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-info');
      } else {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-info');
      }
    }
}
