import { Component, inject, Input, input, SimpleChange, SimpleChanges } from '@angular/core';
import { iproducts } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/searvises/Ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  private cart: CartService = inject(CartService)
  private toastr:ToastrService  = inject(ToastrService)
  @Input({ required: true }) cardproduct!: iproducts

  addTocart(pId: string) {
    {
      this.cart.addtocartAPI(pId).subscribe({
        next: (res) => {
          this.toastr.success(res.message,"cart operation")

        },
        error: (err) =>{
          this.toastr.error(err.error.message,"cart operation")
        }
      })
    }
  }
}