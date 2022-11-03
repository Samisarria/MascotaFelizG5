import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CambioClave, Credenciales, RecuperacionClave, Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    servicioAutenticacion: AutenticacionService;
    constructor(usuarioRepository: UsuarioRepository, servicioAutenticacion: AutenticacionService);
    identificarUsuario(credenciales: Credenciales): Promise<{
        datos: {
            id: string | undefined;
            nombre: string;
            apellidos: string;
            correo: string;
        };
        tk: any;
    }>;
    recuperarClave(usuarioRecuperacion: RecuperacionClave): Promise<Usuario & import("../models").UsuarioRelations>;
    cambiarClave(cambioClave: CambioClave): Promise<Usuario & import("../models").UsuarioRelations>;
    create(usuario: Omit<Usuario, 'Id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: string, usuario: Usuario): Promise<void>;
    replaceById(id: string, usuario: Usuario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
