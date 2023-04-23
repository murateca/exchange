import { Column, Model, Table, HasMany, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Share } from '../share/share.entity';
import { User } from '../user/user.entity';

@Table
export class Portfolio extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Share)
  @Column
  shareId: number;

  @Column
  quantity: number
}