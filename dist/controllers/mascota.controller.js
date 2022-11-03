"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MascotaController = class MascotaController {
    constructor(mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }
    async create(mascota) {
        return this.mascotaRepository.create(mascota);
    }
    async count(where) {
        return this.mascotaRepository.count(where);
    }
    async find(filter) {
        return this.mascotaRepository.find(filter);
    }
    async updateAll(mascota, where) {
        return this.mascotaRepository.updateAll(mascota, where);
    }
    async findById(id, filter) {
        return this.mascotaRepository.findById(id, filter);
    }
    async updateById(id, mascota) {
        await this.mascotaRepository.updateById(id, mascota);
    }
    async replaceById(id, mascota) {
        await this.mascotaRepository.replaceById(id, mascota);
    }
    async deleteById(id) {
        await this.mascotaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/mascotas'),
    (0, rest_1.response)(200, {
        description: 'Mascota model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, {
                    title: 'NewMascota',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mascotas/count'),
    (0, rest_1.response)(200, {
        description: 'Mascota model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Mascota)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mascotas'),
    (0, rest_1.response)(200, {
        description: 'Array of Mascota model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Mascota, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Mascota)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/mascotas'),
    (0, rest_1.response)(200, {
        description: 'Mascota PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Mascota)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Mascota, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mascotas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Mascota model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Mascota, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/mascotas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mascota PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Mascota]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/mascotas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mascota PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Mascota]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/mascotas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mascota DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaController.prototype, "deleteById", null);
MascotaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MascotaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MascotaRepository])
], MascotaController);
exports.MascotaController = MascotaController;
//# sourceMappingURL=mascota.controller.js.map