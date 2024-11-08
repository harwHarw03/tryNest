import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body('name') name: string, @Body('email') email: string): User {
    return this.userService.createUser(name, email);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUser(Number(id));
  }

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('email') email: string,
  ): User {
    return this.userService.updateUser(Number(id), name, email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.userService.deleteUser(Number(id));
  }
}
