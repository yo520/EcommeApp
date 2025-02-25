import { AuthService } from './../../../core/searvises/auth/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router =inject(Router)
  private authService =inject(AuthService)
  islogin :boolean=false;
  ngOnInit(): void {
    this.islogin=false;
    this.authService.userdata.subscribe(()=>{
      if(this.authService.userdata.getValue()!=null){
        this.islogin=true;
      }
      else{
        this.islogin=false;
      }
    })
  }

  logOut(){
    
    localStorage.removeItem("usertoken");
    this.router.navigate(["/login"]);
    this.authService.userdata.next(null);
  }

}
