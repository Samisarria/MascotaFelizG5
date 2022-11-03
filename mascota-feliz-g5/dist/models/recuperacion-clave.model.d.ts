import { Model } from '@loopback/repository';
export declare class RecuperacionClave extends Model {
    Usuario: string;
    constructor(data?: Partial<RecuperacionClave>);
}
export interface RecuperacionClaveRelations {
}
export declare type RecuperacionClaveWithRelations = RecuperacionClave & RecuperacionClaveRelations;
