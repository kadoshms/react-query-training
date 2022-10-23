import { Module } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';
import { OnlineUsersGateway } from './online-users.gateway';
import { OnlineUsersController } from './online-users.controller';

@Module({
  providers: [OnlineUsersGateway, OnlineUsersService],
  controllers: [OnlineUsersController],
})
export class OnlineUsersModule {}
