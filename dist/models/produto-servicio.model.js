"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoServicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ProdutoServicio = class ProdutoServicio extends repository_1.Entity {
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
], ProdutoServicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProdutoServicio.prototype, "tipo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProdutoServicio.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProdutoServicio.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProdutoServicio.prototype, "precio", void 0);
ProdutoServicio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProdutoServicio);
exports.ProdutoServicio = ProdutoServicio;
//# sourceMappingURL=produto-servicio.model.js.map