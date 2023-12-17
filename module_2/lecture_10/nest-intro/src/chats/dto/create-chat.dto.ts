import { IsNotEmpty } from 'class-validator';


export class CreateChatDto {
  @IsNotEmpty()
  sender: string;

  @IsNotEmpty()
  reciever: string;

  @IsNotEmpty()
  message: string;
}
