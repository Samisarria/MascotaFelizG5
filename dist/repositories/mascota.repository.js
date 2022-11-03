"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MascotaRepository = class MascotaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuarioRepositoryGetter, planRepositoryGetter) {
        super(models_1.Mascota, dataSource);
        this.usuarioRepositoryGetter = usuarioRepositoryGetter;
        this.planRepositoryGetter = planRepositoryGetter;
        this.plan = this.createBelongsToAccessorFor('plan', planRepositoryGetter);
        this.registerInclusionResolver('plan', this.plan.inclusionResolver);
        this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter);
        this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
    }
};
MascotaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('UsuarioRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PlanRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], MascotaRepository);
exports.MascotaRepository = MascotaRepository;
//# sourceMappingURL=mascota.repository.js.map