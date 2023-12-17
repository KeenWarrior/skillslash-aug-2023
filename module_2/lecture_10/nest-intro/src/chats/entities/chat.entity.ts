import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {

  @Prop()
  sender: string;

  @Prop()
  reciever: string;

  @Prop()
  message: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);