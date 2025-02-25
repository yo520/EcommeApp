import { authGardGuard } from './core/gards/auth/auth-gard.guard';
import { CatrgoriesComponent } from './features/pages/catrgories/catrgories.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { HomeComponent } from './features/pages/home/home.component';
import { BrandsComponent } from './features/pages/brands/brands.component';
import { PruductsComponent } from './features/pages/pruducts/pruducts.component';
import { ErrorComponent } from './features/pages/error/error.component';
import { RegesterComponent } from './features/auth/regester/regester.component';
import { PditailsComponent } from './features/pages/product-ditails/pditails/pditails.component';
import { AllOrdersComponent } from './features/pages/AllOrders/all-orders/all-orders.component';
import { PayFormComponent } from './features/pages/payForm/pay-form/pay-form.component';
import { ForgepasstFormComponent } from './features/auth/forgetpass/forgepasst-form/forgepasst-form.component';
import { VerifyCodeFormComponent } from './features/auth/verifyRestPass/verify-code-form/verify-code-form.component';
import { RestPassFormComponent } from './features/auth/resetPass/rest-pass-form/rest-pass-form.component';
                          
export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent,canActivate:[authGardGuard]},
   {path:'cart',component:CartComponent ,canActivate:[authGardGuard]},
   {path:'categories',component:CatrgoriesComponent ,canActivate:[authGardGuard]},
   {path:'brands',component:BrandsComponent ,canActivate:[authGardGuard]},
   {path:'products',component:PruductsComponent,canActivate:[authGardGuard]},
   {path:'allorders',component:AllOrdersComponent,canActivate:[authGardGuard]},

   {path:'payform/:cartId',component:PayFormComponent,canActivate:[authGardGuard]},
   {path:'productDitails/:id',component:PditailsComponent,canActivate:[authGardGuard]},
  
   {path:'login',component:LoginComponent},
   {path:'regester',component:RegesterComponent},
   {path:'forgetpass',component:ForgepasstFormComponent},
   {path:'verify',component:VerifyCodeFormComponent},
   {path:'restpass',component:RestPassFormComponent},
   {path:'**',component:ErrorComponent},     
];
