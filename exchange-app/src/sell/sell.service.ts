import { BadRequestException, Injectable } from '@nestjs/common';
import { Portfolio } from '../portfolio/portfolio.entity';
import { PortfolioService } from '../portfolio/portfolio.service';
import { ShareService } from '../share/share.service';
import { UserService } from '../user/user.service';
import { SellDto } from './sell.dto';

@Injectable()
export class SellService {

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly shareService: ShareService,
    private readonly userService: UserService
  ) {}

  async sellShare(request: SellDto): Promise<string> {
    const user = await this.userService.getUserByEmail(request.email);
    const share = await this.shareService.getShareBySymbol(request.symbol);
    await this.portfolioService.getPortfolioByUserId(user.id);
    const portfolioRecord = await this.portfolioService.getPortfolioByUserIdAndShareId(user.id, share.id);
    this.validateSellRequest(portfolioRecord, request);
    await this.portfolioService.updatePortfolioRecord({
      id: portfolioRecord.id,
      quantity: portfolioRecord.quantity - request.quantity
    });
    return `User ${user.email} sold ${request.quantity} ${request.symbol} from ${share.price}`;
  }

  private validateSellRequest(portfolioRecord: Portfolio, sellDto: SellDto) {
    if(!portfolioRecord) {
      throw new BadRequestException(`User don't have any ${sellDto.symbol} share in the portfolio!`);
    }
    if(portfolioRecord.quantity < sellDto.quantity) {
      throw new BadRequestException('User don\'t have sufficient share to sell!');
    }
  }
}

