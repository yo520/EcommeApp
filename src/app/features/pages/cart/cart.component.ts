import { Router, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/searvises/Ecomm/cart/cart.service';
import { IcartProduct } from '../../../shered/interfaces/product-cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  private cartservice=inject(CartService);
  private toastr:ToastrService  = inject(ToastrService);
  private router =inject(Router);

  cartprouducts:IcartProduct[]=[]
  totelprice :number=0;
  cartId:string="";
  ngOnInit(): void {
  this.getAllCart()

  }

  getAllCart(){
    this.cartservice.GetCartAPI().subscribe({
      next:(res)=> {
        if (res.data) {
          this.cartprouducts = res.data.products;
          this.totelprice = res.data.totalCartPrice;
          this.cartId=res.cartId
        } else {
          console.error('Error: res.data is null or undefined');
        }
      },
      error:(err)=>{console.log(err);}
    })
  }


  Removeproduct(pId:string){
    this.cartservice.deletPCartAPI(pId).subscribe({
      next:(res)=>{
        if(res.status=="success"){
        this.toastr.success("item deleted","cart operation")  
        this.getAllCart();
        }
      },
      error:(err)=>{
        this.toastr.error(err.error.message,"cart operation")
      }
    })
  }

  chengeCount(pId:string,pCount:number){
    if(pCount<=0){
      this.Removeproduct(pId);
      return
    }
    this.cartservice.updateCartAPI(pId,pCount).subscribe({
      next:(res)=>{
        this.toastr.info("added","cart operation")
        this.getAllCart();
      },
      error:(err)=>{
        this.toastr.error("error","cart operation")
      }
    })
  }

  clearcart(){
    this.cartservice.ClearCartAPI().subscribe({
      next:(res)=>{
        this.getAllCart();
        this.toastr.warning("cart cleared","cart operation")
        this.router.navigate(['/home']);
      },
      error:(err)=>{
        this.toastr.error(err.error.message,"cart operation")
      }
    })
  }


}
