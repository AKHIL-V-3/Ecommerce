import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { ProductModule } from './Products/product.module';

@Module({
  imports: [AuthModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
