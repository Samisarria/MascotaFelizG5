"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CambioClave = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CambioClave = class CambioClave extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioClave.prototype, "Usuario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioClave.prototype, "ClaveActual", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CambioClave.prototype, "NuevaClave", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], CambioClave.prototype, "ConfirmacionClave", void 0);
CambioClave = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CambioClave);
exports.CambioClave = CambioClave;
//# sourceMappingURL=cambio-clave.model.js.map