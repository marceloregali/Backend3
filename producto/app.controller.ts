import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { AppService } from "./app.service";
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from "class-validator";

interface BodyUsuarios {
  nombre: string;
  apellido: string;
  edad?: number;
}

class AddUser {
  @IsString()
  nombre: string;

  @IsString({
    message: "Apellido es requerido y debe ser de tipo cadena de caracteres",
  })
  apellido: string;

  @IsNumber({})
  @IsOptional()
  edad?: number;

  @IsEmail({})
  email: string;

  @IsStrongPassword()
  password: string;
}

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("usuarios")
  agregarUsuario(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    datos: AddUser
  ) {
    console.log(datos);
    // datos.estatura=1.7
    // return this.appService.getUsuarios()
    return this.appService.creaUsuario(datos);
  }

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("suma/:a/:b")
  suma(
    @Param("a") sumando1: number,
    @Param("b") sumando2: number,
    @Query("nombre") nombre: string
  ): number {
    // sumando2="Pedro"
    // nombre=false
    Logger.debug(nombre);

    sumando1 = Number(sumando1);
    sumando2 = Number(sumando2);
    if (isNaN(sumando1) || isNaN(sumando2)) {
      throw new BadRequestException(`Los argumentos deben ser numéricos`);
    }
    return sumando1 + sumando2;
  }

  @Get("suma2/:a/:b")
  suma2(
    @Param("a", ParseIntPipe) sumando1: number,
    @Param("b", ParseIntPipe) sumando2: number,
    @Query("nombre") nombre: string
  ): number {
    // sumando2="Pedro"
    // nombre=false
    Logger.debug(nombre);

    // sumando1=Number(sumando1)
    // sumando2=Number(sumando2)
    if (isNaN(sumando1) || isNaN(sumando2)) {
      throw new BadRequestException(`Los argumentos deben ser numéricos`);
    }
    return sumando1 + sumando2;
  }
}
