import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { SignInUserDto } from './dtos/signinuser.dto';
import { registerUserDto } from './dtos/registeruser.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './Guards/jwt-authguard';
import { Response } from 'express';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/signin')
  async signIn(@Body() userData: SignInUserDto, @Res() res: Response) {
    try {
      const user = await this.authService.validateUser(
        userData.email,
        userData.password,
      );
      if (user) {
        const response = await this.authService.userSignIn(user);
        const { access_token } = response;
        res.cookie('access_token', access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(201).json(response);
      }
    } catch (err) {
      throw new UnauthorizedException(err.response, err.status);
    }
  }

  @Post('user/signup')
  async register(@Body() userData: registerUserDto, @Res() res: Response) {
    try {
      const response = await this.authService.userSignup(userData);
      return res.status(201).json(response);
    } catch (err) {
      if (err) return res.status(500).json({ message: 'Email already exists' });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/profile')
  getProfile(@Request() req) {
    console.log('called');
    console.log(req.user);
    return req.user;
  }
}
