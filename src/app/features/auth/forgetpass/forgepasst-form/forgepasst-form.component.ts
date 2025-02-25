import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/searvises/auth/auth.service';
import { ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgepasst-form',
  imports: [ReactiveFormsModule],
  templateUrl: './forgepasst-form.component.html',
  styleUrl: './forgepasst-form.component.css'
})
export class ForgepasstFormComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private toster:ToastrService=inject(ToastrService);
  isloding:boolean=false;
  forgetpassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  forgetpasssubmet() {
    this.isloding = true;
    this.authService.forgetPassApi(this.forgetpassForm.value).subscribe({
    
      next: (res) => {
        this.router.navigate(['/verify']);
        this.isloding=false;
      },
      error: (err) => {
        this.toster.error(err.error.message);  
        this.isloding=false;    
      }
    })
  }

}
