import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShareModule } from './share/share.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { UserModule } from './user/user.module';
import { BuyController } from './buy/buy.controller';
import { SellController } from './sell/sell.controller';
import { User } from './user/user.entity';
import { Share } from './share/share.entity';
import { Portfolio } from './portfolio/portfolio.entity';
import { BuyService } from './buy/buy.service';
import { BuyModule } from './buy/buy.module';
import { SellModule } from './sell/sell.module';
import { SellService } from './sell/sell.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'exchange_db',
      models: [User, Share, Portfolio],
    }),
    ShareModule,
    PortfolioModule,
    UserModule,
    BuyModule,
    SellModule,
  ],
  controllers: [AppController, BuyController, SellController],
  providers: [AppService, BuyService, SellService],
})
export class AppModule {}
