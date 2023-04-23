import { Body, Controller, Post } from '@nestjs/common';
import { SellDto } from './sell.dto';
import { SellService } from './sell.service';

@Controller('sell')
export class SellController {
  constructor(private readonly sellService: SellService) {}

  @Post()
  async sell(@Body() sellDto: SellDto): Promise<string> {
    return this.sellService.sellShare(sellDto);
  }
}
