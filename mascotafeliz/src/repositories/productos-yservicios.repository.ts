import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ProductosYservicios, ProductosYserviciosRelations} from '../models';

export class ProductosYserviciosRepository extends DefaultCrudRepository<
  ProductosYservicios,
  typeof ProductosYservicios.prototype.id,
  ProductosYserviciosRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ProductosYservicios, dataSource);
  }
}
