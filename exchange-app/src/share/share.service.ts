import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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
        if(share == null) {
          throw new NotFoundException();
        }
        return share;
      },
      (err) => {
        throw new UnprocessableEntityException(err);
      }
    );
  }
}
