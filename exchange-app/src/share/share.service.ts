import { Injectable } from '@nestjs/common';
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
    return this.shareEntity.findByPk(id);
  }
}
