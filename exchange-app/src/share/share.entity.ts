import { Column, Model, Table, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table
export class Share extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING(3))
  symbol: string;

  @Column(DataType.DECIMAL(2))
  price: number;
}