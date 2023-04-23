import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PortfolioController } from './portfolio.controller';
import { Portfolio } from './portfolio.entity';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [SequelizeModule.forFeature([Portfolio])],
  controllers: [PortfolioController],
  providers: [PortfolioService]
})
export class PortfolioModule {}
