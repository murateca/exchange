import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userEntity: typeof User,
  ) {}

  async getAllUser(): Promise<User[]> {
    return this.userEntity.findAll();
  }

  async getUserById(id: number): Promise<User> {
    return this.userEntity.findByPk(id);
  }
}
