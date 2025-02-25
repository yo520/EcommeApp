import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../../../core/searvises/Ecomm/products/products.service';
import { iproducts } from '../../../../shered/interfaces/products';

@Component({
  selector: 'app-pditails',
  imports: [],
  templateUrl: './pditails.component.html',
  styleUrl: './pditails.component.css'
})

export class PditailsComponent {
private activatedRoute = inject(ActivatedRoute)
private productsService = inject(ProductsService)

pId:string|null="";
pspec !:iproducts;
 ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((p)=>{
    this.pId = p.get('id');
    this.productsService.getspecificProducts(this.pId).subscribe({
      next:(res)=>{
        this.pspec=res.data;
      },
      error:(err)=>{
        console.log(err);
      }
      
    });
   })

  }
}
