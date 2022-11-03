import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { ProductoServicio, ProductoServicioRelations } from '../models';
export declare class ProductoServicioRepository extends DefaultCrudRepository<ProductoServicio, typeof ProductoServicio.prototype.Id, ProductoServicioRelations> {
    constructor(dataSource: MongoDbDataSource);
}
