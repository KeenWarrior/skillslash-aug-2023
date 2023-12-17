import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ChatsModule,
    MongooseModule.forRoot(
      'mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
