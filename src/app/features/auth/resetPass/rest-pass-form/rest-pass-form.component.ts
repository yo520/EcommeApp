import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/searvises/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rest-pass-form',
  imports: [ReactiveFormsModule],
  templateUrl: './rest-pass-form.component.html',
  styleUrl: './rest-pass-form.component.css'
})
export class RestPassFormComponent {
  private router=inject(Router);
  private authservice:AuthService=inject(AuthService);
  private toster:ToastrService=inject(ToastrService);
  isloding:boolean=false;
  restpassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required]),
  })
  resetpasssubmet(){
    this.isloding=true;
    this.authservice.resetPasswordApi(this.restpassForm.value).subscribe({
      next:(res)=>{
        this.isloding=false;
        this.toster.success(res,"success")
        this.router.navigate(["/login"])
      },
      error:(err)=>{
        this.isloding=false;
        this.toster.error(err.error.message,"error")
      }
    })
  }

}
