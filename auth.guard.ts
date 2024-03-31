import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import {inject} from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _authService = inject(AuthService);
  let _routerService = inject(Router);
  if(_authService.userData.getValue()!= null){
    
    return true;
  }
  else{
    _routerService.navigate(['/login']);
    return false;

  }
};
