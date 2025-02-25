import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  let userHeaders:any = {token:localStorage.getItem('usertoken')}

  req = req.clone({ setHeaders: userHeaders });
  return next(req);
};
