import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Mascota } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioMascotaController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Mascota>): Promise<Mascota[]>;
    create(id: typeof Usuario.prototype.id, mascota: Omit<Mascota, 'id'>): Promise<Mascota>;
    patch(id: string, mascota: Partial<Mascota>, where?: Where<Mascota>): Promise<Count>;
    delete(id: string, where?: Where<Mascota>): Promise<Count>;
}
