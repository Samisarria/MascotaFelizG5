import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Prospecto, ProspectoRelations } from '../models';
export declare class ProspectoRepository extends DefaultCrudRepository<Prospecto, typeof Prospecto.prototype.Id, ProspectoRelations> {
    constructor(dataSource: MongoDbDataSource);
}
