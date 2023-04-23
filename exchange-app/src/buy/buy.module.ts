import { Module } from '@nestjs/common';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { ShareModule } from '../share/share.module';
import { UserModule } from '../user/user.module';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';

@Module({
  imports: [
    PortfolioModule,
    ShareModule,
    UserModule
  ],
  controllers: [BuyController],
  providers: [BuyService],
})
export class BuyModule {}
