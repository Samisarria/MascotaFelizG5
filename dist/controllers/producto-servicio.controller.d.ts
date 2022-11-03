import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProdutoServicio } from '../models';
import { ProdutoServicioRepository } from '../repositories';
export declare class ProductoServicioController {
    produtoServicioRepository: ProdutoServicioRepository;
    constructor(produtoServicioRepository: ProdutoServicioRepository);
    create(produtoServicio: Omit<ProdutoServicio, 'id'>): Promise<ProdutoServicio>;
    count(where?: Where<ProdutoServicio>): Promise<Count>;
    find(filter?: Filter<ProdutoServicio>): Promise<ProdutoServicio[]>;
    updateAll(produtoServicio: ProdutoServicio, where?: Where<ProdutoServicio>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ProdutoServicio>): Promise<ProdutoServicio>;
    updateById(id: string, produtoServicio: ProdutoServicio): Promise<void>;
    replaceById(id: string, produtoServicio: ProdutoServicio): Promise<void>;
    deleteById(id: string): Promise<void>;
}
