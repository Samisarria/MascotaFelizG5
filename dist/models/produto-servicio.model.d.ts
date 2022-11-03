import { Entity } from '@loopback/repository';
export declare class ProdutoServicio extends Entity {
    id?: string;
    tipo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    constructor(data?: Partial<ProdutoServicio>);
}
export interface ProdutoServicioRelations {
}
export declare type ProdutoServicioWithRelations = ProdutoServicio & ProdutoServicioRelations;
