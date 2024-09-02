import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usuarios: Usuario[] = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  constructor() { }

  validar_usuario(userLogin: Usuario): boolean {
    return this.usuarios.some(usuario =>
      usuario.username === userLogin.username && usuario.password === userLogin.password
    );
  }

  getUsuarioRole(userLogin: Usuario): string | null {
    const usuario = this.usuarios.find(usuario =>
      usuario.username === userLogin.username && usuario.password === userLogin.password
    );
    return usuario ? usuario.role : null;
  }
}
