"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
const plan_model_1 = require("./plan.model");
let Mascota = class Mascota extends repository_1.Entity {
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
], Mascota.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "foto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "especie", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "comentario", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => plan_model_1.Plan),
    tslib_1.__metadata("design:type", String)
], Mascota.prototype, "planId", void 0);
Mascota = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Mascota);
exports.Mascota = Mascota;
//# sourceMappingURL=mascota.model.js.map