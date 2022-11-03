import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {}

  // eslint-disable-next-line @typescript-eslint/naming-convention
  GenerarClave() {
    const clave = generador(8, false);
    return clave;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  CifrarClave(clave: string) {
    const claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  IdentificarPersona(usuario: string, clave: string) {
    try {
      const p = this.usuarioRepository.findOne({
        where: {Correo: usuario, Clave: clave},
      });

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (p) {
        return p;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RecuperarClaveUsuario(usuario: string) {
    try {
      const p = this.usuarioRepository.findOne({
        where: {Correo: usuario},
      });

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (p) {
        return p;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  CambiarClaveUsuario(usuario: string, claveActual: string) {
    try {
      const p = this.usuarioRepository.findOne({
        where: {Correo: usuario, Clave: claveActual},
      });

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (p) {
        return p;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  GenerarTokenJWT(usuario: Usuario) {
    const token = jwt.sign(
      {
        data: {
          id: usuario.Id,
          correo: usuario.Correo,
          nombre: usuario.Nombres + ' ' + usuario.Apellidos,
          rol: usuario.Rol,
        },
      },
      Llaves.claveJWT,
    );

    return token;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ValidarTokenJWT(token: string) {
    try {
      const datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }
}
