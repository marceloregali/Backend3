import { PartialType } from "@nestjs/mapped-types";
import { CreateClienteDto } from "../Dto/Create-cliente";

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}
