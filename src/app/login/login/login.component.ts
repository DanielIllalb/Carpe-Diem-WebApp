import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.formLogin.value);
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.errorMessage = null
      this.router.navigate(['']);
    })
    .catch(error => {
      console.log(error);
      this.errorMessage = 'Correo Electrónico o contraseña incorrectos';
    })

  }

  onClick() {
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['']);
    })
    .catch( error => console.log(error))
  }
}

