import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Mascota } from '../models';
import { MascotaRepository } from './mascota.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected mascotaRepositoryGetter: Getter<MascotaRepository>;
    readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Usuario.prototype.id>;
    constructor(dataSource: MongodbDataSource, mascotaRepositoryGetter: Getter<MascotaRepository>);
}
