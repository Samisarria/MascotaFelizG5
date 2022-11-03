import { Mascota, Plan } from '../models';
import { MascotaRepository } from '../repositories';
export declare class MascotaPlanController {
    mascotaRepository: MascotaRepository;
    constructor(mascotaRepository: MascotaRepository);
    getPlan(id: typeof Mascota.prototype.id): Promise<Plan>;
}
