"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoServicioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoServicioController = class ProductoServicioController {
    constructor(productoServicioRepository) {
        this.productoServicioRepository = productoServicioRepository;
    }
    async create(productoServicio) {
        return this.productoServicioRepository.create(productoServicio);
    }
    async count(where) {
        return this.productoServicioRepository.count(where);
    }
    async find(filter) {
        return this.productoServicioRepository.find(filter);
    }
    async updateAll(productoServicio, where) {
        return this.productoServicioRepository.updateAll(productoServicio, where);
    }
    async findById(id, filter) {
        return this.productoServicioRepository.findById(id, filter);
    }
    async updateById(id, productoServicio) {
        await this.productoServicioRepository.updateById(id, productoServicio);
    }
    async replaceById(id, productoServicio) {
        await this.productoServicioRepository.replaceById(id, productoServicio);
    }
    async deleteById(id) {
        await this.productoServicioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/productos-servicios'),
    (0, rest_1.response)(200, {
        description: 'ProductoServicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio, {
                    title: 'NewProductoServicio',
                    exclude: ['Id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos-servicios/count'),
    (0, rest_1.response)(200, {
        description: 'ProductoServicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProductoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos-servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of ProductoServicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ProductoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productos-servicios'),
    (0, rest_1.response)(200, {
        description: 'ProductoServicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ProductoServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProductoServicio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos-servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'ProductoServicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProductoServicio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productos-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProductoServicio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProductoServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProductoServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/productos-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProductoServicio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProductoServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/productos-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProductoServicio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoServicioController.prototype, "deleteById", null);
ProductoServicioController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("Administrador"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductoServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductoServicioRepository])
], ProductoServicioController);
exports.ProductoServicioController = ProductoServicioController;
//# sourceMappingURL=producto-servicio.controller.js.map