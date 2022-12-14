import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Plan} from '../models';
import {PlanRepository} from '../repositories';

@authenticate('Administrador', 'Asesor')
export class PlanController {
  constructor(
    @repository(PlanRepository)
    public planRepository: PlanRepository,
  ) {}

  @post('/planes')
  @response(200, {
    description: 'Plan model instance',
    content: {'application/json': {schema: getModelSchemaRef(Plan)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {
            title: 'NewPlan',
            exclude: ['Id'],
          }),
        },
      },
    })
    plan: Omit<Plan, 'Id'>,
  ): Promise<Plan> {
    return this.planRepository.create(plan);
  }

  @get('/planes/count')
  @response(200, {
    description: 'Plan model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Plan) where?: Where<Plan>): Promise<Count> {
    return this.planRepository.count(where);
  }

  @authenticate('Administrador', 'Asesor', 'Cliente')
  @get('/planes')
  @response(200, {
    description: 'Array of Plan model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Plan, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Plan) filter?: Filter<Plan>): Promise<Plan[]> {
    return this.planRepository.find(filter);
  }

  @patch('/planes')
  @response(200, {
    description: 'Plan PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {partial: true}),
        },
      },
    })
    plan: Plan,
    @param.where(Plan) where?: Where<Plan>,
  ): Promise<Count> {
    return this.planRepository.updateAll(plan, where);
  }

  @get('/planes/{id}')
  @response(200, {
    description: 'Plan model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Plan, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Plan, {exclude: 'where'}) filter?: FilterExcludingWhere<Plan>,
  ): Promise<Plan> {
    return this.planRepository.findById(id, filter);
  }

  @patch('/planes/{id}')
  @response(204, {
    description: 'Plan PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {partial: true}),
        },
      },
    })
    plan: Plan,
  ): Promise<void> {
    await this.planRepository.updateById(id, plan);
  }

  @put('/planes/{id}')
  @response(204, {
    description: 'Plan PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() plan: Plan,
  ): Promise<void> {
    await this.planRepository.replaceById(id, plan);
  }

  @del('/planes/{id}')
  @response(204, {
    description: 'Plan DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.planRepository.deleteById(id);
  }
}
