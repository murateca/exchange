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
  ],
  controllers: [AppController, BuyController, SellController],
  providers: [AppService],
})
export class AppModule {}
