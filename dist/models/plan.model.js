"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const mascota_model_1 = require("./mascota.model");
let Plan = class Plan extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Plan.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Plan.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Plan.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Plan.prototype, "precio", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => mascota_model_1.Mascota),
    tslib_1.__metadata("design:type", Array)
], Plan.prototype, "mascotas", void 0);
Plan = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Plan);
exports.Plan = Plan;
//# sourceMappingURL=plan.model.js.map