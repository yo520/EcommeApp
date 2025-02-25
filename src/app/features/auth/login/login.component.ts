import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/searvises/auth/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
private router=inject(Router);
  private authService =inject(AuthService);
  private toster:ToastrService=inject(ToastrService);
  errormassege:string='';
  successmassege:string='';
  isloding:boolean=false;


   loginForm:FormGroup=new FormGroup({ 
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-zA-Z0-9]{6,15}$/)]),
    })

  loginsubmet()
{
  this.isloding=true;

  if(this.loginForm.valid)
  {
    this.authService.sendLoginDataToApi(this.loginForm.value).subscribe(
      {
        next:(res)=>{
          this.isloding=false;
          this.successmassege=res.message;
          this.router.navigate(['/home'])
          this.toster.success(res.message);
          localStorage.setItem('usertoken',res.token); 
          this.authService.userdata;
         
        },
        error:(err)=>{
          this.toster.error(err.error.message);
          console.log(err);
          this.isloding=false; 
        } 
      });
  
  }
}
}
