import {authenticate} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Mascota, Usuario} from '../models';
import {MascotaRepository} from '../repositories';

@authenticate('Administrador', 'Asesor', 'Cliente')
export class MascotaUsuarioController {
  constructor(
    @repository(MascotaRepository)
    public mascotaRepository: MascotaRepository,
  ) {}

  @get('/mascotas/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Mascota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Mascota.prototype.Id,
  ): Promise<Usuario> {
    return this.mascotaRepository.usuario(id);
  }
}
