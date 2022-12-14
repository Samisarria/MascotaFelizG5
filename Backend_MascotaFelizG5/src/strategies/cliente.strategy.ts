import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';

export class EstrategiaCliente implements AuthenticationStrategy {
  name = 'Cliente';

  constructor(
    @service(AutenticacionService)
    public autenticacionService: AutenticacionService,
  ) {}

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    const token = parseBearerToken(request);
    if (token) {
      const datos = this.autenticacionService.ValidarTokenJWT(token);

      if (datos.data) {
        if (datos.data.rol === 'Cliente') {
          const perfil: UserProfile = Object.assign({
            id: datos.data.id,
            nombre: datos.data.nombre,
            rol: datos.data.rol,
          });

          return perfil;
        } else {
          throw new HttpErrors[401](
            'El usuario no cuenta con permisos para acceder al recurso',
          );
        }
      } else {
        throw new HttpErrors[401]('Token no válido');
      }
    } else {
      throw new HttpErrors[401]('Token no válido');
    }
  }
}
