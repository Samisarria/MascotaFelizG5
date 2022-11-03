import { Entity } from '@loopback/repository';
export declare class Prospecto extends Entity {
    id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;
    comentario: string;
    constructor(data?: Partial<Prospecto>);
}
export interface ProspectoRelations {
}
export declare type ProspectoWithRelations = Prospecto & ProspectoRelations;
