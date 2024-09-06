export interface Usuario {
    username: string;
    password: string;
    role: 'administrador' | 'coordinador' | 'ciudadano' | 'voluntario';
  }