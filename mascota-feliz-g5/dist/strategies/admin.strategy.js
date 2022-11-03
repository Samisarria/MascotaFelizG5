"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaAdministrador = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = tslib_1.__importDefault(require("parse-bearer-token"));
const services_1 = require("../services");
let EstrategiaAdministrador = class EstrategiaAdministrador {
    constructor(autenticacionService) {
        this.autenticacionService = autenticacionService;
        this.name = "Administrador";
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.autenticacionService.ValidarTokenJWT(token);
            if (datos.data) {
                let perfil = Object.assign({
                    nombre: datos.data.Nombres
                });
                return perfil;
            }
            else {
                throw new rest_1.HttpErrors[401]("Token no válido");
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("Token no válido");
        }
    }
};
EstrategiaAdministrador = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [services_1.AutenticacionService])
], EstrategiaAdministrador);
exports.EstrategiaAdministrador = EstrategiaAdministrador;
//# sourceMappingURL=admin.strategy.js.map