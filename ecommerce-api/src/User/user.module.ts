import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { PrismaModule } from 'src/Prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
