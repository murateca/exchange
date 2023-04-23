import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio)
    private portfolioEntity: typeof Portfolio,
  ) {}

  async getAllPorfolios(): Promise<Portfolio[]>{
    return this.portfolioEntity.findAll();
  }

  async getPortfolioById(id: number): Promise<Portfolio> {
    return this.portfolioEntity.findByPk(id).then(
      (portfolio) => {
        if(portfolio == null) {
          throw new NotFoundException();
        }
        return portfolio;
      },
      (err) => {
        throw new UnprocessableEntityException(err);
      }
    );
  }
}
