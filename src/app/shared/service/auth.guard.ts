import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const authenticated = sessionStorage.getItem('userId');
   if (!authenticated) {
      inject(Router).navigate(['/login']);
      return false;
   } else {
        return true;
      }
};
