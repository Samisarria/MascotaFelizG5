import { Entity } from '@loopback/repository';
export declare class ProductoServicio extends Entity {
    Id?: string;
    Tipo: string;
    Descripcion: string;
    Precio: number;
    constructor(data?: Partial<ProductoServicio>);
}
export interface ProductoServicioRelations {
}
export declare type ProductoServicioWithRelations = ProductoServicio & ProductoServicioRelations;
