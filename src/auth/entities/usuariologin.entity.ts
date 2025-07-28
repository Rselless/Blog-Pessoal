import { IsNotEmpty } from 'class-validator';

export class UsuarioLogin {
  @IsNotEmpty({ message: 'O campo usuário é obrigatório' })
  public usuario: string;

  @IsNotEmpty({ message: 'O campo senha é obrigatório' })
  public senha: string;
}
