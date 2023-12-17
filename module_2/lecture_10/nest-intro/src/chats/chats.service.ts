import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './entities/chat.entity';
import { Model } from 'mongoose';

@Injectable()
export class ChatsService {

  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
  ) {}

  create(createChatDto: CreateChatDto) {
    return this.chatModel.create(createChatDto);
  }

  findAll() {
    return this.chatModel.find();
  }

  findOne(id: string) {
    return this.chatModel.findById(id);
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return this.chatModel.findByIdAndUpdate(id, updateChatDto);
  }

  remove(id: string) {
    return this.chatModel.findByIdAndDelete(id);
  }
}
