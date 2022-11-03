import { Entity } from '@loopback/repository';
import { Mascota } from './mascota.model';
export declare class Plan extends Entity {
    Id?: string;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    mascotas: Mascota[];
    constructor(data?: Partial<Plan>);
}
export interface PlanRelations {
}
export declare type PlanWithRelations = Plan & PlanRelations;
