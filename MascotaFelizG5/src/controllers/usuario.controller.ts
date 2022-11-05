import {authenticate} from '@loopback/authentication';
import {service} from '@loopback/core';
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
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Llaves} from '../config/llaves';
import {CambioClave, Credenciales, RecuperacionClave, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import {AutenticacionService} from '../services';

const fetch = require('node-fetch');

@authenticate('Administrador')
export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) {}

  @authenticate.skip()
  @post('/identificarUsuario', {
    responses: {
      '200': {
        description: 'Identificacion de usuarios',
      },
    },
  })
  async identificarUsuario(@requestBody() credenciales: Credenciales) {
    const p = await this.servicioAutenticacion.IdentificarPersona(
      credenciales.Usuario,
      credenciales.Clave,
    );
    if (p) {
      const token = this.servicioAutenticacion.GenerarTokenJWT(p);
      return {
        datos: {
          id: p.Id,
          nombre: p.Nombres,
          apellidos: p.Apellidos,
          correo: p.Correo,
        },
        tk: token,
      };
    } else {
      throw new HttpErrors[401]('Datos de inicio de sesión no válidos');
    }
  }

  @authenticate.skip()
  @post('/recuperarClave')
  @response(200, {
    description: 'Recuperacion de contraseña',
  })
  async recuperarClave(@requestBody() usuarioRecuperacion: RecuperacionClave) {
    const p = await this.servicioAutenticacion.RecuperarClaveUsuario(
      usuarioRecuperacion.Usuario,
    );
    if (p) {
      const clave = this.servicioAutenticacion.GenerarClave();
      const claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
      p.Clave = claveCifrada;

      await this.usuarioRepository.updateById(p.Id, p);

      // Notificacion al usuario
      const destino = p.Correo;
      const asunto = 'Recuperación de contraseña mascota feliz';
      const contenido = `Hola ${p.Nombres}, el restablecimiento de tu contraseña fue exitoso. Tu nueva contraseña es ${clave}`;
      fetch(
        `${Llaves.urlServicioNotificaciones}/email?destinatario=${destino}&asunto=${asunto}&mensaje=${contenido}`,
      )
        .then((data: unknown) => {
          console.log(data);
        })
        .catch((err: unknown) => console.log(err));

      return p;
    } else {
      throw new HttpErrors[401]('Datos no válidos');
    }
  }

  @authenticate('Administrador', 'Cliente', 'Asesor')
  @post('/cambiarClave')
  @response(200, {
    description: 'Cambio de contraseña',
  })
  async cambiarClave(@requestBody() cambioClave: CambioClave) {
    const p = await this.servicioAutenticacion.CambiarClaveUsuario(
      cambioClave.Usuario,
      cambioClave.ClaveActual,
    );
    if (p) {
      //let clave = cambioClave.NuevaClave;
      const claveCifrada = cambioClave.NuevaClave;
      p.Clave = claveCifrada;

      await this.usuarioRepository.updateById(p.Id, p);

      // Notificacion al usuario
      const destino = p.Correo;
      const asunto = 'Cambio de contraseña mascota feliz';
      const contenido = `Hola ${p.Nombres}, el cambio de tu contraseña fue exitoso.`;
      fetch(
        `${Llaves.urlServicioNotificaciones}/email?destinatario=${destino}&asunto=${asunto}&mensaje=${contenido}`,
      )
        .then((data: unknown) => {
          console.log(data);
        })
        .catch((err: unknown) => console.log(err));

      return p;
    } else {
      throw new HttpErrors[401]('Datos no válidos');
    }
  }

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['Id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'Id'>,
  ): Promise<Usuario> {
    // Generacion de la clave cifrada
    const clave = this.servicioAutenticacion.GenerarClave();
    const claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    usuario.Clave = claveCifrada;
    const p = await this.usuarioRepository.create(usuario);

    // Notificacion al usuario
    const destino = usuario.Correo;
    const asunto = 'Registro mascota feliz';
    const contenido = `Hola ${usuario.Nombres}, bienvenido a Mascota Feliz. Tu nombre de usuario para ingresar a la plataforma es ${usuario.Correo} y la contraseña es ${clave}`;
    fetch(
      `${Llaves.urlServicioNotificaciones}/email?destinatario=${destino}&asunto=${asunto}&mensaje=${contenido}`,
    )
      .then((data: unknown) => {
        console.log(data);
      })
      .catch((err: unknown) => console.log(err));

    return p;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Usuario) where?: Where<Usuario>): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'})
    filter?: FilterExcludingWhere<Usuario>,
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
