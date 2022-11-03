import { Mascota, Usuario } from '../models';
import { MascotaRepository } from '../repositories';
export declare class MascotaUsuarioController {
    mascotaRepository: MascotaRepository;
    constructor(mascotaRepository: MascotaRepository);
    getUsuario(id: typeof Mascota.prototype.id): Promise<Usuario>;
}
