import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ProdutoServicio} from '../models';
import {ProdutoServicioRepository} from '../repositories';

export class ProductoServicioController {
  constructor(
    @repository(ProdutoServicioRepository)
    public produtoServicioRepository : ProdutoServicioRepository,
  ) {}

  @post('/produto-servicios')
  @response(200, {
    description: 'ProdutoServicio model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProdutoServicio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutoServicio, {
            title: 'NewProdutoServicio',
            exclude: ['id'],
          }),
        },
      },
    })
    produtoServicio: Omit<ProdutoServicio, 'id'>,
  ): Promise<ProdutoServicio> {
    return this.produtoServicioRepository.create(produtoServicio);
  }

  @get('/produto-servicios/count')
  @response(200, {
    description: 'ProdutoServicio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProdutoServicio) where?: Where<ProdutoServicio>,
  ): Promise<Count> {
    return this.produtoServicioRepository.count(where);
  }

  @get('/produto-servicios')
  @response(200, {
    description: 'Array of ProdutoServicio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProdutoServicio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProdutoServicio) filter?: Filter<ProdutoServicio>,
  ): Promise<ProdutoServicio[]> {
    return this.produtoServicioRepository.find(filter);
  }

  @patch('/produto-servicios')
  @response(200, {
    description: 'ProdutoServicio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutoServicio, {partial: true}),
        },
      },
    })
    produtoServicio: ProdutoServicio,
    @param.where(ProdutoServicio) where?: Where<ProdutoServicio>,
  ): Promise<Count> {
    return this.produtoServicioRepository.updateAll(produtoServicio, where);
  }

  @get('/produto-servicios/{id}')
  @response(200, {
    description: 'ProdutoServicio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProdutoServicio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProdutoServicio, {exclude: 'where'}) filter?: FilterExcludingWhere<ProdutoServicio>
  ): Promise<ProdutoServicio> {
    return this.produtoServicioRepository.findById(id, filter);
  }

  @patch('/produto-servicios/{id}')
  @response(204, {
    description: 'ProdutoServicio PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutoServicio, {partial: true}),
        },
      },
    })
    produtoServicio: ProdutoServicio,
  ): Promise<void> {
    await this.produtoServicioRepository.updateById(id, produtoServicio);
  }

  @put('/produto-servicios/{id}')
  @response(204, {
    description: 'ProdutoServicio PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() produtoServicio: ProdutoServicio,
  ): Promise<void> {
    await this.produtoServicioRepository.replaceById(id, produtoServicio);
  }

  @del('/produto-servicios/{id}')
  @response(204, {
    description: 'ProdutoServicio DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.produtoServicioRepository.deleteById(id);
  }
}
