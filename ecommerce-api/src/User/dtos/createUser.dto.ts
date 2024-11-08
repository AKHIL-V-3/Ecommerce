import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
