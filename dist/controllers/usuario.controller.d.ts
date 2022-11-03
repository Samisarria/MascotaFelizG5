import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    servicioAutenticacion: AutenticacionService;
    constructor(usuarioRepository: UsuarioRepository, servicioAutenticacion: AutenticacionService);
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
}
