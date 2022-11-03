import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Sucursal, SucursalRelations } from '../models';
export declare class SucursalRepository extends DefaultCrudRepository<Sucursal, typeof Sucursal.prototype.Id, SucursalRelations> {
    constructor(dataSource: MongoDbDataSource);
}
