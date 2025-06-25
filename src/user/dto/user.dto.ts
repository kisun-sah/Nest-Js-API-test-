import { MinLength, IsString, IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';

export class AddUserDto {
    @Transform(({ value }) => value === 'kartik' ? 'kisu' : value)
    @IsString()
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    type: string;
}