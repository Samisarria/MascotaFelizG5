import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ProdutoServicio, ProdutoServicioRelations} from '../models';

export class ProdutoServicioRepository extends DefaultCrudRepository<
  ProdutoServicio,
  typeof ProdutoServicio.prototype.id,
  ProdutoServicioRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ProdutoServicio, dataSource);
  }
}
