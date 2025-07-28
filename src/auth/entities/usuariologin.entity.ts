import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UsuarioLogin {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo usuário é obrigatório' })
  public usuario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo senha é obrigatório' })
  public senha: string;
}
