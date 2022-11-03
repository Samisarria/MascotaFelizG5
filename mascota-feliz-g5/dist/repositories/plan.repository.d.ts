import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Plan, PlanRelations, Mascota } from '../models';
import { MascotaRepository } from './mascota.repository';
export declare class PlanRepository extends DefaultCrudRepository<Plan, typeof Plan.prototype.Id, PlanRelations> {
    protected mascotaRepositoryGetter: Getter<MascotaRepository>;
    readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Plan.prototype.Id>;
    constructor(dataSource: MongoDbDataSource, mascotaRepositoryGetter: Getter<MascotaRepository>);
}
