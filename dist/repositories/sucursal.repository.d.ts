import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Sucursal, SucursalRelations } from '../models';
export declare class SucursalRepository extends DefaultCrudRepository<Sucursal, typeof Sucursal.prototype.id, SucursalRelations> {
    constructor(dataSource: MongodbDataSource);
}
