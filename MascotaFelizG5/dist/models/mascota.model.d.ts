import { Entity } from '@loopback/repository';
export declare class Mascota extends Entity {
    Id?: string;
    Nombre: string;
    Color: string;
    Especie: string;
    Estado: string;
    usuarioId: string;
    planId: string;
    constructor(data?: Partial<Mascota>);
}
export interface MascotaRelations {
}
export declare type MascotaWithRelations = Mascota & MascotaRelations;
