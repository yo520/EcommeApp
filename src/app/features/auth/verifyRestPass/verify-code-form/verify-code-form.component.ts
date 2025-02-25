import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../../core/searvises/auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code-form',
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code-form.component.html',
  styleUrl: './verify-code-form.component.css'
})
export class VerifyCodeFormComponent {
  isloding:boolean=false;
  private router=inject(Router);
  private toster:ToastrService=inject(ToastrService);

  private authService:AuthService=inject(AuthService)
    verifyForm: FormGroup = new FormGroup({
      resetCode: new FormControl(null, [Validators.required]),
    });
    verifyCodesubmet(){
      const data = { resetCode: String(this.verifyForm.value.resetCode) };

      this.isloding=true;
      console.log(data)
      this.authService.verifyResetCodeApi(data).subscribe({
        next:(res)=>{
          this.isloding=false;
          this.router.navigate(['/restpass']);
          this.toster.success(res.message);
        },
        error:(err)=>{
          this.isloding=false;
          this.toster.error(err.error.message);
        }
      })
    }
}
