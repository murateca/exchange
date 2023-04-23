import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShareDto } from '../share/share.dto';
import { PortFolioCrateDto } from './portfolio.create.dto';
import { Portfolio } from './portfolio.entity';
import { PortfolioGroupDto } from './portfolio.group.dto';
import { PortfolioUpdateDto } from './portfolio.update.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio)
    private portfolioEntity: typeof Portfolio,
  ) {}

  async getAllPorfolios(): Promise<Portfolio[]> {
    return this.portfolioEntity.findAll();
  }

  async getPortfolioById(id: number): Promise<Portfolio> {
    return this.portfolioEntity.findByPk(id).then(
      (portfolio) => {
        if (portfolio == null) {
          throw new NotFoundException();
        }
        return portfolio;
      },
      (err) => {
        throw new UnprocessableEntityException(err);
      },
    );
  }

  async getPortfolioByUserId(userId: number): Promise<PortfolioGroupDto> {
    return this.portfolioEntity
      .findAll({
        where: {
          userId: userId,
        },
      })
      .then((portfolios: Portfolio[]) => {
        if (portfolios?.length) {
          let shares: ShareDto[] = portfolios.map((portfolio) => ({
            symbol: portfolio.shareId,
            quantity: portfolio.quantity,
          }));
          return {
            userId: userId,
            shares: shares,
          };
        } else {
          throw new BadRequestException("User don't have registered portfolio");
        }
      });
  }

  async getPortfolioByUserIdAndShareId(
    userId: number,
    shareId: number,
  ): Promise<Portfolio> {
    return this.portfolioEntity.findOne({
      where: {
        userId: userId,
        shareId: shareId,
      },
    });
  }

  async createPortfolioRecord(
    portfolioDto: PortFolioCrateDto,
  ): Promise<Portfolio> {
    return this.portfolioEntity.create({
      userId: portfolioDto.userId,
      shareId: portfolioDto.shareId,
      quantity: portfolioDto.quantity,
    });
  }

  async updatePortfolioRecord(
    portfolioUpdateDto: PortfolioUpdateDto,
  ): Promise<void> {
    this.portfolioEntity.update(
      {
        quantity: portfolioUpdateDto.quantity,
      },
      {
        where: {
          id: portfolioUpdateDto.id,
        },
      },
    );
  }

  async createOrUpdatePortfolioRecord(
    portfolioDto: PortFolioCrateDto,
  ): Promise<Portfolio> {
    const portfolioRecord = await this.getPortfolioByUserIdAndShareId(
      portfolioDto.userId,
      portfolioDto.shareId,
    );
    if (portfolioRecord == null) {
      return this.createPortfolioRecord(portfolioDto);
    } else {
      this.updatePortfolioRecord({
        id: portfolioRecord.id,
        quantity: portfolioRecord.quantity + portfolioDto.quantity
      });
    }
  }
}
