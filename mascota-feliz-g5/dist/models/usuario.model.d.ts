import { Entity } from '@loopback/repository';
import { Mascota } from './mascota.model';
export declare class Usuario extends Entity {
    Id?: string;
    Identificacion: string;
    Nombres: string;
    Apellidos: string;
    Rol: string;
    Correo: string;
    Clave: string;
    Direccion: string;
    Telefono: string;
    mascotas: Mascota[];
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
