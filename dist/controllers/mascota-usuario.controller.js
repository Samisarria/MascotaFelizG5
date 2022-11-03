"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MascotaUsuarioController = class MascotaUsuarioController {
    constructor(mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }
    async getUsuario(id) {
        return this.mascotaRepository.usuario(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/mascotas/{id}/usuario', {
        responses: {
            '200': {
                description: 'Usuario belonging to Mascota',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaUsuarioController.prototype, "getUsuario", null);
MascotaUsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MascotaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MascotaRepository])
], MascotaUsuarioController);
exports.MascotaUsuarioController = MascotaUsuarioController;
//# sourceMappingURL=mascota-usuario.controller.js.map