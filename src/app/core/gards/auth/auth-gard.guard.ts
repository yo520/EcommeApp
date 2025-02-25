import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
          
    let router =inject(Router);
   const pLATFORM_ID=inject(PLATFORM_ID);
      if(isPlatformBrowser(pLATFORM_ID)){
        if(localStorage.getItem("usertoken") !=null)
          {
            return true;
          }
      }

    router.navigate(['/login']);
    return false;
  
  
};
