import { Column, Model, Table, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  portfolioId: number;
}