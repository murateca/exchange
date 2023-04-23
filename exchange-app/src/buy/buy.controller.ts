import { Body, Controller, Post } from '@nestjs/common';
import { BuyDto } from './buy.dto';
import { BuyService } from './buy.service';

@Controller('buy')
export class BuyController {

  constructor(private readonly buyService: BuyService) {}
  
  @Post()
  async buy(@Body() request: BuyDto): Promise<string> {
    return this.buyService.buyShare(request);
  }
}
