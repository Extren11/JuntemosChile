export interface Usuario {
    username: string;
    password: string;
    role: 'admin' | 'user';
  }