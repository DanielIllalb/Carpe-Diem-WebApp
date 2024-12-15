import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.user$.subscribe(async user => {
        this.isLoggedIn = !!user; // `true` si hay un usuario autenticado, `false` si no.
        if (this.isLoggedIn) {
          this.isAdmin = await this.userService.getAdminStatus(); // Comprobar si es admin
        }
      })


  }

  onClick() {
    this.userService.logout()
    .then(() => {
      alert('Sesion cerrada correctamente')
      window.location.reload();
  })
    .catch(error => console.log(error));
  }

  async checkAdminStatus() {
    this.isAdmin = await this.userService.getAdminStatus();
  }
  
}
