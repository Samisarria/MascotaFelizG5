import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { PredicateComparison, repository } from '@loopback/repository';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
import { Llaves } from '../config/llaves';

const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string) {
    try {
      let p = this.usuarioRepository.findOne({
        where : {Correo: usuario, Clave: clave}
      });

      if (p) {
        return p;
      }
      return false;

    } catch (error) {
      return false;
    }
  }

  RecuperarClaveUsuario(usuario: string) {
    try {
      let p = this.usuarioRepository.findOne({
        where : {Correo: usuario}
      });

      if (p) {
        return p;
      }
      return false;

    } catch (error) {
      return false;
    }
  }

  CambiarClaveUsuario(usuario: string, claveActual: string){
    try {
      let p = this.usuarioRepository.findOne({
        where : {Correo: usuario, Clave: claveActual}
      });

      if (p) {
        return p;
      }
      return false;

    } catch (error) {
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id : usuario.Id,
        correo: usuario.Correo,
        nombre: usuario.Nombres + " " + usuario.Apellidos,
        rol: usuario.Rol
      }
    }, 
    Llaves.claveJWT);

    return token;
  }

  ValidarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;

    } catch (error) {
      return false;
    }
  }

}