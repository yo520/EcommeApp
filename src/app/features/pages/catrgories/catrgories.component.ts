import { Icateg } from './../../../shered/interfaces/categInterface';
import { Component, inject } from '@angular/core';
import { CategoresService } from '../../../core/searvises/Ecomm/catgories/categores.service';

@Component({
  selector: 'app-catrgories',
  imports: [],
  templateUrl: './catrgories.component.html',
  styleUrl: './catrgories.component.css'
})
export class CatrgoriesComponent {
  private catservice:CategoresService=inject(CategoresService)
  AllCat:Icateg[]=[];
  Scat:Icateg[]=[];
  ngOnInit(): void {
    this.getAllCat();
  }

  getAllCat()
  {
    return this.catservice.getAllCat().subscribe({
      next:(res)=>{
        this.AllCat=res.data;
       
        

      }
    })
  }
  getScat(catId:string)
  {
    return this.catservice.getSpacCat(catId).subscribe({


      next:(res)=>{
        
        this.Scat=res.data;        

      }

    })
  }

}
