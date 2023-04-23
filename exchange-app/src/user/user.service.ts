import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
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
    return this.userEntity.findByPk(id).then(
      (user) => {
        if (user == null) {
          throw new NotFoundException();
        }
        return user;
      },
      (err) => {
        throw new UnprocessableEntityException(err);
      },
    );
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userEntity
      .findOne({
        where: {
          email: email,
        },
      })
      .then(
        (user) => {
          if (user == null) {
            throw new NotFoundException();
          }
          return user;
        },
        (err) => {
          throw new UnprocessableEntityException(err);
        },
      );
  }
}
