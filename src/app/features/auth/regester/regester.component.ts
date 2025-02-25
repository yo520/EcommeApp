import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/searvises/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-regester',
  imports: [ReactiveFormsModule],
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.css'
})

export class RegesterComponent {
  private router=inject(Router);
  private authService =inject(AuthService);
  private toster:ToastrService=inject(ToastrService);
  errormassege:string='';
  successmassege:string='';
  isloding:boolean=false;
  regesterForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-zA-Z0-9]{6,15}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-zA-Z0-9]{6,15}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2]\d{1,8}$/)]),
},this.confirmPassword)

regestersubmet()
{
  this.isloding=true;

  if(this.regesterForm.valid)
  {
    this.authService.sendRegesterDataToApi(this.regesterForm.value).subscribe(
      {
        next:(res)=>{
          this.router.navigate(['/login']);
          this.toster.success(res.message);
          this.isloding=false;
        },
        error:(err)=>{
          this.toster.error(err.error.message);
          this.isloding=false; 
        } 
      });
  
  }
}

confirmPassword(g:AbstractControl){
  if(g.get('password')?.value===g.get('rePassword')?.value)
  {
   return null;
  }
  else
  {
    return {'missmatced':true};
  }
}

}
