import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClienteDto } from "../Dto/Create-cliente";
import { UpdateClienteDto } from "../Dto/update-producto.dto";

@Controller("clientes")
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.clientesService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.clientesService.remove(id);
  }
}
