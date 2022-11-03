"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMascotaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioMascotaController = class UsuarioMascotaController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async find(id, filter) {
        return this.usuarioRepository.mascotas(id).find(filter);
    }
    async create(id, mascota) {
        return this.usuarioRepository.mascotas(id).create(mascota);
    }
    async patch(id, mascota, where) {
        return this.usuarioRepository.mascotas(id).patch(mascota, where);
    }
    async delete(id, where) {
        return this.usuarioRepository.mascotas(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Array of Usuario has many Mascota',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Mascota) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioMascotaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Usuario model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, {
                    title: 'NewMascotaInUsuario',
                    exclude: ['id'],
                    optional: ['usuarioId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioMascotaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Usuario.Mascota PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Mascota))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioMascotaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Usuario.Mascota DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Mascota))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioMascotaController.prototype, "delete", null);
UsuarioMascotaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioMascotaController);
exports.UsuarioMascotaController = UsuarioMascotaController;
//# sourceMappingURL=usuario-mascota.controller.js.map