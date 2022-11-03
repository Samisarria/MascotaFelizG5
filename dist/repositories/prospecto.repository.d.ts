import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Prospecto, ProspectoRelations } from '../models';
export declare class ProspectoRepository extends DefaultCrudRepository<Prospecto, typeof Prospecto.prototype.id, ProspectoRelations> {
    constructor(dataSource: MongodbDataSource);
}
