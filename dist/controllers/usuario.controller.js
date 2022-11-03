"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require("node-fetch");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, servicioAutenticacion) {
        this.usuarioRepository = usuarioRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async create(usuario) {
        let clave = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        usuario.contrasena = claveCifrada;
        let p = await this.usuarioRepository.create(usuario); // es let a = await es para pponerlo a esperar ya que es una funcion asincrona
        //notificar al usuario
        let destino = usuario.correo;
        let asunto = "Datos de registro en la plataforma";
        let contenido = `Hola ${usuario.nombre}Bienvenido a MascotaFelizG5, su usuario es ${usuario.correo} y su contrasena es ${clave}`;
        fetch(`http://127.0.0.1:5000/email?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
            .then((data) => {
            console.log(data);
        });
        return p;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
UsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__param(1, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AutenticacionService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
count();
where ?  : Where,
;
Promise < Count > {
    return: this.usuarioRepository.count(where)
};
find();
filter ?  : Filter,
;
Promise < models_1.Usuario[] > {
    return: this.usuarioRepository.find(filter)
};
updateAll();
usuario: models_1.Usuario,
;
where ?  : Where,
;
Promise < Count > {
    return: this.usuarioRepository.updateAll(usuario, where)
};
findById();
id: string,
;
filter ?  : FilterExcludingWhere;
Promise < models_1.Usuario > {
    return: this.usuarioRepository.findById(id, filter)
};
updateById();
id: string,
;
usuario: models_1.Usuario,
;
Promise < void  > {
    await: this.usuarioRepository.updateById(id, usuario)
};
replaceById();
id: string,
;
usuario: models_1.Usuario,
;
Promise < void  > {
    await: this.usuarioRepository.replaceById(id, usuario)
};
deleteById();
id: string;
Promise < void  > {
    await: this.usuarioRepository.deleteById(id)
};
;
//# sourceMappingURL=usuario.controller.js.map