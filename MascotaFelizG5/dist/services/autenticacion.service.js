"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const llaves_1 = require("../config/llaves");
const repositories_1 = require("../repositories");
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
let AutenticacionService = class AutenticacionService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GenerarClave() {
        const clave = generador(8, false);
        return clave;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CifrarClave(clave) {
        const claveCifrada = cryptoJS.MD5(clave).toString();
        return claveCifrada;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    IdentificarPersona(usuario, clave) {
        try {
            const p = this.usuarioRepository.findOne({
                where: { Correo: usuario, Clave: clave },
            });
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (p) {
                return p;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    RecuperarClaveUsuario(usuario) {
        try {
            const p = this.usuarioRepository.findOne({
                where: { Correo: usuario },
            });
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (p) {
                return p;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CambiarClaveUsuario(usuario, claveActual) {
        try {
            const p = this.usuarioRepository.findOne({
                where: { Correo: usuario, Clave: claveActual },
            });
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (p) {
                return p;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GenerarTokenJWT(usuario) {
        const token = jwt.sign({
            data: {
                id: usuario.Id,
                correo: usuario.Correo,
                nombre: usuario.Nombres + ' ' + usuario.Apellidos,
                rol: usuario.Rol,
            },
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ValidarTokenJWT(token) {
        try {
            const datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (error) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map