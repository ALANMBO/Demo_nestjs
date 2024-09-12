import {
  IsNumber,
  IsString,
  IsEmail,
  IsNotEmpty,
  Max,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
  @IsString({ message: 'El campo usuario debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo usuario no debe ser mayor a 50 caracteres',
  })
  readonly usuario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo clave es obligatorio' })
  @IsNumber({}, { message: 'El campo clave debe ser de tipo numérico' })
  @Max(9999999999999999, {  
    message: 'El campo clave no debe ser mayor a 16 dígitos',
  })
  readonly clave: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email es obligatorio' })
  @IsEmail({}, { message: 'El campo email debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo email no debe ser mayor a 50 caracteres',
  })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo rol es obligatorio' })
  @IsString({ message: 'El campo rol debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo rol no debe ser mayor a 50 caracteres',
  })
  readonly rol: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo premium es obligatorio' })
  @IsString({ message: 'El campo premium debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo premium no debe ser mayor a 50 caracteres',
  })
  readonly premium: string;
}
