import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Mascota, MascotaRelations, Usuario, Plan } from '../models';
import { UsuarioRepository } from './usuario.repository';
import { PlanRepository } from './plan.repository';
export declare class MascotaRepository extends DefaultCrudRepository<Mascota, typeof Mascota.prototype.Id, MascotaRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    protected planRepositoryGetter: Getter<PlanRepository>;
    readonly usuario: BelongsToAccessor<Usuario, typeof Mascota.prototype.Id>;
    readonly plan: BelongsToAccessor<Plan, typeof Mascota.prototype.Id>;
    constructor(dataSource: MongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>, planRepositoryGetter: Getter<PlanRepository>);
}
