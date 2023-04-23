import { Injectable } from '@nestjs/common';
import { PortfolioService } from '../portfolio/portfolio.service';
import { ShareService } from '../share/share.service';
import { UserService } from '../user/user.service';
import { BuyDto } from './buy.dto';

@Injectable()
export class BuyService {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly userService: UserService,
    private readonly shareService: ShareService,
  ) {}

  async buyShare(request: BuyDto): Promise<string> {
    const user = await this.userService.getUserByEmail(request.email);
    const share = await this.shareService.getShareBySymbol(request.symbol);
    await this.portfolioService.getPortfolioByUserId(user.id);
    await this.portfolioService.createOrUpdatePortfolioRecord({
      userId: user.id,
      shareId: share.id,
      quantity: request.quantity,
    });
    await this.shareService.createShareRecord({
      symbol: request.symbol,
      price: request.price
    });
    return `User ${user.email} bought ${request.quantity} ${request.symbol} from ${share.price}`
  }
}
