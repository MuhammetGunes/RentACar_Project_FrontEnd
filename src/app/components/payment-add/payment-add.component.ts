import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent{
  paymentAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private paymentService:PaymentService, private toastrService:ToastrService){}

    ngOnInit(): void {
      this.createPaymentAddForm();
    }

    createPaymentAddForm(){
      this.paymentAddForm=this.formBuilder.group({
        fullName:["",Validators.required],
        cardNumber:["",Validators.required],
        cvv:["",Validators.required],
        month:["",Validators.required],
        year:["",Validators.required]
      })
    }
    add(){
      if (this.paymentAddForm.valid) {
        let paymentModel = Object.assign({},this.paymentAddForm.value);
          this.paymentService.add(paymentModel).subscribe(response=>{
            this.toastrService.success(response.message,"Başarılı!")
          },responseError=>{
            console.log(responseError)
            if(responseError.error.message){

              this.toastrService.error(responseError.error.message
                ,"Doğrulama hatası")

          }
          })
      }else {
        this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
      }
    }


}
