import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private toastrService:ToastrService, private router:Router ){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        this.toastrService.success("Giriş Yapıldı..")
        localStorage.setItem("token",response.data.token)
        this.router.navigate(["/cars"])
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }

  goRegister(){
    this.router.navigate(["register"]);
  }
}
