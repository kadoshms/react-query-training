import { Controller, Get } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';

@Controller('online-users')
export class OnlineUsersController {
  constructor(private readonly onlineUsersService: OnlineUsersService) {}
  @Get()
  getOnlineUsers() {
    return this.onlineUsersService.getOnlineUsers();
  }
}
