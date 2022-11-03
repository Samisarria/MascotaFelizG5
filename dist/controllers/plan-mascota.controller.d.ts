import { Count, Filter, Where } from '@loopback/repository';
import { Plan, Mascota } from '../models';
import { PlanRepository } from '../repositories';
export declare class PlanMascotaController {
    protected planRepository: PlanRepository;
    constructor(planRepository: PlanRepository);
    find(id: string, filter?: Filter<Mascota>): Promise<Mascota[]>;
    create(id: typeof Plan.prototype.id, mascota: Omit<Mascota, 'id'>): Promise<Mascota>;
    patch(id: string, mascota: Partial<Mascota>, where?: Where<Mascota>): Promise<Count>;
    delete(id: string, where?: Where<Mascota>): Promise<Count>;
}
