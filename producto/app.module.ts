import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductosModule } from "./productos.module";
import { ClientesModule } from "../cliente/schema/clientes.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: "./src/.env" }),
    MongooseModule.forRoot(process.env.MONGO_URL!, {
      dbName: process.env.DB_NAME,
    }),
    ProductosModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log(`Hola desde AppModule`);
  }
}
