"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Sucursal = class Sucursal extends repository_1.Entity {
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
], Sucursal.prototype, "Id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "Direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "Ciudad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "Departamento", void 0);
Sucursal = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Sucursal);
exports.Sucursal = Sucursal;
//# sourceMappingURL=sucursal.model.js.map