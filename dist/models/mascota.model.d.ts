import { Entity } from '@loopback/repository';
export declare class Mascota extends Entity {
    id?: string;
    nombre: string;
    foto: string;
    estado: string;
    especie: string;
    comentario: string;
    usuarioId: string;
    planId: string;
    constructor(data?: Partial<Mascota>);
}
export interface MascotaRelations {
}
export declare type MascotaWithRelations = Mascota & MascotaRelations;
