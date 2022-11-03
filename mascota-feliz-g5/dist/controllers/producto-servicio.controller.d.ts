import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProductoServicio } from '../models';
import { ProductoServicioRepository } from '../repositories';
export declare class ProductoServicioController {
    productoServicioRepository: ProductoServicioRepository;
    constructor(productoServicioRepository: ProductoServicioRepository);
    create(productoServicio: Omit<ProductoServicio, 'Id'>): Promise<ProductoServicio>;
    count(where?: Where<ProductoServicio>): Promise<Count>;
    find(filter?: Filter<ProductoServicio>): Promise<ProductoServicio[]>;
    updateAll(productoServicio: ProductoServicio, where?: Where<ProductoServicio>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ProductoServicio>): Promise<ProductoServicio>;
    updateById(id: string, productoServicio: ProductoServicio): Promise<void>;
    replaceById(id: string, productoServicio: ProductoServicio): Promise<void>;
    deleteById(id: string): Promise<void>;
}
