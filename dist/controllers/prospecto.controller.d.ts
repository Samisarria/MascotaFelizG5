import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Prospecto } from '../models';
import { ProspectoRepository } from '../repositories';
export declare class ProspectoController {
    prospectoRepository: ProspectoRepository;
    constructor(prospectoRepository: ProspectoRepository);
    create(prospecto: Omit<Prospecto, 'id'>): Promise<Prospecto>;
    count(where?: Where<Prospecto>): Promise<Count>;
    find(filter?: Filter<Prospecto>): Promise<Prospecto[]>;
    updateAll(prospecto: Prospecto, where?: Where<Prospecto>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Prospecto>): Promise<Prospecto>;
    updateById(id: string, prospecto: Prospecto): Promise<void>;
    replaceById(id: string, prospecto: Prospecto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
