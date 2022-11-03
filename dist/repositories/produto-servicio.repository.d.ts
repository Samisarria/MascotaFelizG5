import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { ProdutoServicio, ProdutoServicioRelations } from '../models';
export declare class ProdutoServicioRepository extends DefaultCrudRepository<ProdutoServicio, typeof ProdutoServicio.prototype.id, ProdutoServicioRelations> {
    constructor(dataSource: MongodbDataSource);
}
