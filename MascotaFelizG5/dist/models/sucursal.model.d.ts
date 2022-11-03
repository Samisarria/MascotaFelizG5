import { Entity } from '@loopback/repository';
export declare class Sucursal extends Entity {
    Id?: string;
    Nombre: string;
    Direccion: string;
    Ciudad: string;
    Departamento: string;
    constructor(data?: Partial<Sucursal>);
}
export interface SucursalRelations {
}
export declare type SucursalWithRelations = Sucursal & SucursalRelations;
