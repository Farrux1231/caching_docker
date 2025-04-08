import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as stores from "cache-manager-ioredis"
@Module({
  imports: [ProductModule, CategoryModule, PrismaModule,
    CacheModule.register({
      ttl:10,
      store:stores
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
