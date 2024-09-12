import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {
  constructor(
  @InjectRepository(Usuario)
  private usuarioRepository: Repository<Usuario>
) {}
  
async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
  const existe = await this.usuarioRepository.findOneBy({
    usuario: createUsuarioDto.usuario.trim(),
    email: createUsuarioDto.email.trim(),
  });

  if (existe) {
    throw new ConflictException('El usuario ya existe');
  }


  const usuario = new Usuario();
  usuario.usuario = createUsuarioDto.usuario.trim();
  usuario.clave = createUsuarioDto.clave;
  usuario.email = createUsuarioDto.email.trim();
  usuario.rol = createUsuarioDto.rol;
  usuario.premium = createUsuarioDto.premium;

  return this.usuarioRepository.save(usuario);
}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  
  async findOne(id: number): Promise<Usuario> {
    const Usuario = await this.usuarioRepository.findOneBy({ id });
    if (!Usuario) throw new NotFoundException('El Usuario no existe');
    return Usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.findOne(id);  
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuarioUpdate);
  }
  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuarioRepository.softRemove(usuario);
  }
  







}
