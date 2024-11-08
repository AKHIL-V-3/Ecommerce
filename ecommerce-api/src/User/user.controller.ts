import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { UserService } from './user.services';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  createUser(@Body() user: createUserDto) {
    return this.userService.createUser(user);
  }
}
