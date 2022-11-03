"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanMascotaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PlanMascotaController = class PlanMascotaController {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async find(id, filter) {
        return this.planRepository.mascotas(id).find(filter);
    }
    async create(id, mascota) {
        return this.planRepository.mascotas(id).create(mascota);
    }
    async patch(id, mascota, where) {
        return this.planRepository.mascotas(id).patch(mascota, where);
    }
    async delete(id, where) {
        return this.planRepository.mascotas(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/plans/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Array of Plan has many Mascota',
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
], PlanMascotaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/plans/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Plan model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mascota, {
                    title: 'NewMascotaInPlan',
                    exclude: ['id'],
                    optional: ['planId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlanMascotaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/plans/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Plan.Mascota PATCH success count',
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
], PlanMascotaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/plans/{id}/mascotas', {
        responses: {
            '200': {
                description: 'Plan.Mascota DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Mascota))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlanMascotaController.prototype, "delete", null);
PlanMascotaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PlanRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PlanRepository])
], PlanMascotaController);
exports.PlanMascotaController = PlanMascotaController;
//# sourceMappingURL=plan-mascota.controller.js.map