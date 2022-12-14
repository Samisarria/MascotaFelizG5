"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaPlanController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MascotaPlanController = class MascotaPlanController {
    constructor(mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }
    async getPlan(id) {
        return this.mascotaRepository.plan(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/mascotas/{id}/plan', {
        responses: {
            '200': {
                description: 'Plan belonging to Mascota',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Plan) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MascotaPlanController.prototype, "getPlan", null);
MascotaPlanController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("Administrador"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MascotaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MascotaRepository])
], MascotaPlanController);
exports.MascotaPlanController = MascotaPlanController;
//# sourceMappingURL=mascota-plan.controller.js.map