import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Mascota } from '../models';
import { MascotaRepository } from './mascota.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.Id, UsuarioRelations> {
    protected mascotaRepositoryGetter: Getter<MascotaRepository>;
    readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Usuario.prototype.Id>;
    constructor(dataSource: MongoDbDataSource, mascotaRepositoryGetter: Getter<MascotaRepository>);
}
