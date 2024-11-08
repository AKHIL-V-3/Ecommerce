import { Injectable } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { PrismaService } from 'src/Prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async createUser(userData: createUserDto) {
    const hashedPassword = await this.hashPassword(userData.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
        },
      });
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
