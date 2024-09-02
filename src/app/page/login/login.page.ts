import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/api/users/users.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private _usersLogin: UsersService, private router: Router) { }

  login() {
    const userLogin: Usuario = { username: this.username, password: this.password, role: 'user' };

    if (this._usersLogin.validar_usuario(userLogin)) {
      // Redirige a la página de productos si el login es exitoso
      console.info('Iniciaste sesion');
       this.router.navigate(['home'], {
        state: {
           userInfo: userLogin
        }
      });
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      console.info('Error, usuario no existe');
    }
  }
}