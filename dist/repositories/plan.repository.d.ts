import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Plan, PlanRelations, Mascota } from '../models';
import { MascotaRepository } from './mascota.repository';
export declare class PlanRepository extends DefaultCrudRepository<Plan, typeof Plan.prototype.id, PlanRelations> {
    protected mascotaRepositoryGetter: Getter<MascotaRepository>;
    readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Plan.prototype.id>;
    constructor(dataSource: MongodbDataSource, mascotaRepositoryGetter: Getter<MascotaRepository>);
}
