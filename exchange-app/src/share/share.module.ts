import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Share } from './share.entity';

@Module({
  imports: [SequelizeModule.forFeature([Share])],
  providers: [ShareService],
  controllers: [ShareController]
})
export class ShareModule {}
