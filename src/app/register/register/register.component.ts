import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  formRegister: FormGroup;
  errorMessage: string | null = null;

  constructor( private userService: UserService, private router: Router ) {
    this.formRegister = new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl(),
        admin: new FormControl(false)
      })
  }

  ngOnInit():void {

  }

  onSubmit() {
    this.userService.register(this.formRegister.value)
    .then(response => {
      const uid = response.user.uid; // UID del usuario registrado
      const userWithUid = { ...this.formRegister.value, uid };
      return this.userService.addUser(userWithUid);
    })
    .then(() => {
      console.log('Usuario registrado y añadido a Firestore.');
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.error('Error durante el registro:', error)
      this.errorMessage = 'Correo electrónico o contraseña inválidos'
    });
  }
}
