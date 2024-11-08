import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { createUserDto } from 'src/User/dtos/createUser.dto';

export class registerUserDto extends createUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  retypepassword: string;
}
