import { Component, inject } from '@angular/core';
import { BrandService } from '../../../core/searvises/Ecomm/brands/brand.service';
import { Icateg } from '../../../shered/interfaces/categInterface';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
    private brandService=inject(BrandService)
    allbrands:Icateg[]=[];
  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe({

      next:(res)=>{
        this.allbrands=res.data;
      },


    });
  }

}
