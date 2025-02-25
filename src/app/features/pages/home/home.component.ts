import { CardComponent } from './../../../shered/components/card/card.component';
import { iproducts } from '../../../shered/interfaces/products';
import { ProductsService } from './../../../core/searvises/Ecomm/products/products.service';
import { Component, inject } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../../shered/pips/search/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CardComponent ,CarouselModule ,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
private productsService=inject(ProductsService);
userSerchWord:string='';
allproducts:iproducts[]=[];

customOptions1: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true
}
customOptions2: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['prev', 'next'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 8
    }
  },
  nav: true
}
ngOnInit(): void {  
 this.getallproducts();
}
getallproducts(){
  this.productsService.getALLProducts().subscribe({
    next:(res)=>{
    this.allproducts=res.data;
    },
    error:(err)=>{
      console.log(err);
    } 
  });
}
}
