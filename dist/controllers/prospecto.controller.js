"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProspectoController = class ProspectoController {
    constructor(prospectoRepository) {
        this.prospectoRepository = prospectoRepository;
    }
    async create(prospecto) {
        return this.prospectoRepository.create(prospecto);
    }
    async count(where) {
        return this.prospectoRepository.count(where);
    }
    async find(filter) {
        return this.prospectoRepository.find(filter);
    }
    async updateAll(prospecto, where) {
        return this.prospectoRepository.updateAll(prospecto, where);
    }
    async findById(id, filter) {
        return this.prospectoRepository.findById(id, filter);
    }
    async updateById(id, prospecto) {
        await this.prospectoRepository.updateById(id, prospecto);
    }
    async replaceById(id, prospecto) {
        await this.prospectoRepository.replaceById(id, prospecto);
    }
    async deleteById(id) {
        await this.prospectoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/prospectos'),
    (0, rest_1.response)(200, {
        description: 'Prospecto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Prospecto) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Prospecto, {
                    title: 'NewProspecto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/prospectos/count'),
    (0, rest_1.response)(200, {
        description: 'Prospecto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Prospecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/prospectos'),
    (0, rest_1.response)(200, {
        description: 'Array of Prospecto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Prospecto, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Prospecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/prospectos'),
    (0, rest_1.response)(200, {
        description: 'Prospecto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Prospecto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Prospecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Prospecto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/prospectos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Prospecto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Prospecto, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Prospecto, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/prospectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Prospecto PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Prospecto, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Prospecto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/prospectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Prospecto PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Prospecto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/prospectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Prospecto DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProspectoController.prototype, "deleteById", null);
ProspectoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProspectoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProspectoRepository])
], ProspectoController);
exports.ProspectoController = ProspectoController;
//# sourceMappingURL=prospecto.controller.js.map