import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { registerUserDto } from './dtos/registeruser.dto';
import { UserService } from 'src/User/user.services';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  userSignup(user: registerUserDto) {
    if (user.password !== user.retypepassword) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Passwords do not match',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const userDetails = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.userService.createUser(userDetails);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new HttpException('Incorrect email', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(pass, user.password)) {
      return user;
    } else {
      throw new HttpException('Incorrect Password', HttpStatus.UNAUTHORIZED);
    }
  }

  async userSignIn(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
