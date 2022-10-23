import {
  WebSocketGateway,
  OnGatewayConnection,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { OnlineUsersService } from './online-users.service';

@WebSocketGateway({ cors: true })
export class OnlineUsersGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server;

  constructor(private readonly onlineUsersService: OnlineUsersService) {}

  handleConnection() {
    this.onlineUsersService.increment();
    this.notifyOnChange();
  }

  handleDisconnect() {
    this.onlineUsersService.decrement();
    this.notifyOnChange();
  }

  private notifyOnChange() {
    this.server.emit('online-users');
  }
}
