import { Injectable } from '@nestjs/common';

@Injectable()
export class OnlineUsersService {
  private onlineUsers = 0;

  public increment() {
    this.onlineUsers++;
  }

  public decrement() {
    this.onlineUsers--;
  }

  public getOnlineUsers() {
    return this.onlineUsers;
  }
}
