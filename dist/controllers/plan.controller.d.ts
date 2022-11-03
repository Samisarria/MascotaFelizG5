import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Plan } from '../models';
import { PlanRepository } from '../repositories';
export declare class PlanController {
    planRepository: PlanRepository;
    constructor(planRepository: PlanRepository);
    create(plan: Omit<Plan, 'id'>): Promise<Plan>;
    count(where?: Where<Plan>): Promise<Count>;
    find(filter?: Filter<Plan>): Promise<Plan[]>;
    updateAll(plan: Plan, where?: Where<Plan>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Plan>): Promise<Plan>;
    updateById(id: string, plan: Plan): Promise<void>;
    replaceById(id: string, plan: Plan): Promise<void>;
    deleteById(id: string): Promise<void>;
}
