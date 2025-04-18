import { Injectable } from "@nestjs/common";
import { CreateProductoDto } from "../producto/dto/create-producto.dto";
import { UpdateProductoDto } from "../producto/dto/update-producto";

@Injectable()
export class ProductosService {
  create(createProductoDto: CreateProductoDto) {
    return "This action adds a new producto";
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
