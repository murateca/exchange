import { Module } from '@nestjs/common';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { ShareModule } from '../share/share.module';
import { UserModule } from '../user/user.module';
import { SellController } from './sell.controller';
import { SellService } from './sell.service';

@Module({
  imports: [
    PortfolioModule,
    ShareModule,
    UserModule
  ],
  controllers: [SellController],
  providers: [SellService]
})
export class SellModule {}
