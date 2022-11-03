import { Entity } from '@loopback/repository';
export declare class Prospecto extends Entity {
    Id?: string;
    Nombres: string;
    Apellidos: string;
    Ciudad: string;
    Departamento: string;
    Direccion: string;
    Correo: string;
    Telefono: string;
    Comentario: string;
    constructor(data?: Partial<Prospecto>);
}
export interface ProspectoRelations {
}
export declare type ProspectoWithRelations = Prospecto & ProspectoRelations;
