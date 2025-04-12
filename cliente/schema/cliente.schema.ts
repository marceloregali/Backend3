import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  telefono: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
