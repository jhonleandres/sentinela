import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import * as ormconfig from '../ormconfig';


@Module({
  imports: [TypeOrmModule.forRoot(ormconfig),
    TenantModule,
    ProductModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
