import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
