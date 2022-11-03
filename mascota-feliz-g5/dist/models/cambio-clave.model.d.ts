import { Model } from '@loopback/repository';
export declare class CambioClave extends Model {
    Usuario: string;
    ClaveActual: string;
    NuevaClave: string;
    ConfirmacionClave?: string;
    constructor(data?: Partial<CambioClave>);
}
export interface CambioClaveRelations {
}
export declare type CambioClaveWithRelations = CambioClave & CambioClaveRelations;
