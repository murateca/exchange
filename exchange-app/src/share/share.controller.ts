import { Controller, Get, Param } from '@nestjs/common';
import { Share } from './share.entity';
import { ShareService } from './share.service';

@Controller('share')
export class ShareController {

  constructor(private readonly shareService: ShareService) {}

  @Get()
  async getAll(): Promise<Share[]> {
    return this.shareService.getAllShares();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Share> {
    return this.shareService.getShareById(id);
  }

}
