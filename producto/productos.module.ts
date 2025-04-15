import { Logger, Module } from "@nestjs/common";
import { ProductosService } from "../producto/productos.service";
import { ProductosController } from "./productos.controller";

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {
  constructor() {
    Logger.debug(
      `MONGO URL (var entorno): ${process.env.MONGO_URL}`,
      "ProductosModulo"
    );
  }
}
