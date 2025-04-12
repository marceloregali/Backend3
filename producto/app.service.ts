import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  usuarios = [
    {
      id: 1,
      nombre: "Luciana",
      email: "luciana@test.com",
      password: "123",
      rol: "user",
    },
    {
      id: 2,
      nombre: "Juan",
      email: "juan@test.com",
      password: "123",
      rol: "user",
    },
    {
      id: 3,
      nombre: "Romina",
      email: "romina@test.com",
      password: "123",
      rol: "admin",
    },
  ];
  constructor() {}

  getHello(): string {
    return "Hello World!";
  }

  creaUsuario(user: any) {
    let id = 1;
    if (this.usuarios.length > 0) {
      id = Math.max(...this.usuarios.map((d) => d.id)) + 1;
    }

    // validaciones pertinentes

    this.usuarios.push({
      id,
      ...user,
    });

    // return this.usuarios
    return {
      id,
      ...user,
    };
  }

  getUsuarios() {
    return this.usuarios;
  }
}
