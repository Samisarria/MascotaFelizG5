import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductosYservicios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;


  constructor(data?: Partial<ProductosYservicios>) {
    super(data);
  }
}

export interface ProductosYserviciosRelations {
  // describe navigational properties here
}

export type ProductosYserviciosWithRelations = ProductosYservicios & ProductosYserviciosRelations;
