import { Entity } from '@loopback/repository';
export declare class Sucursal extends Entity {
    id?: string;
    departamento: string;
    ciudad: string;
    direccion: string;
    telefono: string;
    constructor(data?: Partial<Sucursal>);
}
export interface SucursalRelations {
}
export declare type SucursalWithRelations = Sucursal & SucursalRelations;
