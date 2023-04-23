import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShareCreateDto } from './share.create.dto';
import { Share } from './share.entity';

@Injectable()
export class ShareService {
  constructor(
    @InjectModel(Share)
    private shareEntity: typeof Share,
  ) {}

  async getAllShares(): Promise<Share[]> {
    return this.shareEntity.findAll();
  }

  async getShareById(id: number): Promise<Share> {
    return this.shareEntity.findByPk(id).then(
      (share) => {
        if (share == null) {
          throw new NotFoundException();
        }
        return share;
      },
      (err) => {
        throw new UnprocessableEntityException(err);
      },
    );
  }

  async getShareBySymbol(symbol: string): Promise<Share> {
    return this.shareEntity
      .findOne({
        where: {
          symbol: symbol,
        },
        order: [['updatedAt', 'DESC']],
      })
      .then(
        (share) => {
          if (share == null) {
            throw new BadRequestException(
              `Share with ${symbol} symbol is not exist!`,
            );
          }
          return share;
        },
        (err) => {
          throw new UnprocessableEntityException(err);
        },
      );
  }

  async createShareRecord(shareRecord: ShareCreateDto): Promise<Share> {
    return this.shareEntity.create({
      symbol: shareRecord.symbol,
      price: shareRecord.price
    })
  }
}
