import { Controller, Get, Param } from '@nestjs/common';
import { Portfolio } from './portfolio.entity';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {

  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async getAll(): Promise<Portfolio[]> {
    return this.portfolioService.getAllPorfolios();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Portfolio> {
    return this.portfolioService.getPortfolioById(id);
  }

  @Get('/user/:userId')
  async getByUserId(@Param('userId') userId: number): Promise<any> {
    return this.portfolioService.getPortfolioByUserId(userId);
  }
}
