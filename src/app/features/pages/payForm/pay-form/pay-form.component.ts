import { ToastrService } from 'ngx-toastr';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../../core/searvises/Ecomm/AllOrders/orders.service';

@Component({
  selector: 'app-pay-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pay-form.component.html',
  styleUrl: './pay-form.component.css'
})

export class PayFormComponent {

  isloding:boolean=false;
  cartId:string|null="";
  private activatedRoute =inject(ActivatedRoute);
  private ordersService =inject(OrdersService);
  private toster=inject(ToastrService)
  payform:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required ]),
    city:new FormControl(null,[Validators.required]),

  }) 

  payformsubmet(){
    this.isloding=true;
    this.activatedRoute.paramMap.subscribe((p)=>{
     this.cartId = p.get('cartId');


    })
    this.ordersService.checkout(this.cartId!,this.payform.value).subscribe({
      next:(res)=>{
        this.isloding=false;
        window.location.href=res.session.url;
      },
      error:(err)=>{
        this.isloding=false;
        this.toster.error(err.error.message);
      }
    })


  }
}
