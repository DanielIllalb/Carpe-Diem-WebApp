import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';

export const permissionsGuard: CanActivateFn = (): Observable<boolean> => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.user$.pipe(
    switchMap((user) => {
      console.log('Usuario autenticado:', user);
      // Caso 1: Usuario no autenticado
      if (!user) {
        alert('Debe iniciar sesión para acceder a esta página');
        router.navigate(['login']);
        return of(false);
      }

    

      // Caso 2: Usuario autenticado, verificar si es administrador
      return userService.getAdminStatus().then((isAdmin) => {
        if (!isAdmin) {
          alert('No tiene permisos para acceder a la página');
          router.navigate(['']);
          return false;
        }
        return true;
      });
    })
  );
};
