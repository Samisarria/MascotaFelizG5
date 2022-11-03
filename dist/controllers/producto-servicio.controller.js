"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoServicioController = class ProductoServicioController {
    constructor(produtoServicioRepository) {
        this.produtoServicioRepository = produtoServicioRepository;
    }
    async create(produtoServicio) {
        return this.produtoServicioRepository.create(produtoServicio);
    }
    async count(where) {
        return this.produtoServicioRepository.count(where);
    }
    async find(filter) {
        return this.produtoServicioRepository.find(filter);
    }
    async updateAll(produtoServicio, where) {
        return this.produtoServicioRepository.updateAll(produtoServicio, where);
    }
    async findById(id, filter) {
        return this.produtoServicioRepository.findById(id, filter);
    }
    async updateById(id, produtoServicio) {
        await this.produtoServicioRepository.updateById(id, produtoServicio);
    }
    async replaceById(id, produtoServicio) {
        await this.produtoServicioRepository.replaceById(id, produtoServicio);
    }
    async deleteById(id) {
        await this.produtoServicioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/produto-servicios'),
    (0, rest_1.response)(200, {
        description: 'ProdutoServicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio, {
                    title: 'NewProdutoServicio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produto-servicios/count'),
    (0, rest_1.response)(200, {
        description: 'ProdutoServicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProdutoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produto-servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of ProdutoServicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ProdutoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/produto-servicios'),
    (0, rest_1.response)(200, {
        description: 'ProdutoServicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ProdutoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProdutoServicio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/produto-servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'ProdutoServicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProdutoServicio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/produto-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProdutoServicio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProdutoServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProdutoServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/produto-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProdutoServicio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProdutoServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/produto-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProdutoServicio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "deleteById", null);
ProductoServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProdutoServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProdutoServicioRepository])
], ProductoServicioController);
exports.ProductoServicioController = ProductoServicioController;
//# sourceMappingURL=producto-servicio.controller.js.map