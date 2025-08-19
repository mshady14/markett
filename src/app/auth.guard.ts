import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (route.routeConfig?.path === 'login') {
      if (isLoggedIn) {
        this.router.navigate(['/products']);
        return false;
      }
      return true;
    }

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
