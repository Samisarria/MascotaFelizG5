import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Mascota } from '../models';
import { MascotaRepository } from '../repositories';
export declare class MascotaController {
    mascotaRepository: MascotaRepository;
    constructor(mascotaRepository: MascotaRepository);
    create(mascota: Omit<Mascota, 'id'>): Promise<Mascota>;
    count(where?: Where<Mascota>): Promise<Count>;
    find(filter?: Filter<Mascota>): Promise<Mascota[]>;
    updateAll(mascota: Mascota, where?: Where<Mascota>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Mascota>): Promise<Mascota>;
    updateById(id: string, mascota: Mascota): Promise<void>;
    replaceById(id: string, mascota: Mascota): Promise<void>;
    deleteById(id: string): Promise<void>;
}
