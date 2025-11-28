import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  @IsEmail({}, { message: 'Formato de e-mail inválido' })
  email!: string;
  
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password!: string;

  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name!: string;
}
