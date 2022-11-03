"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuarioRepository = class UsuarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, mascotaRepositoryGetter) {
        super(models_1.Usuario, dataSource);
        this.mascotaRepositoryGetter = mascotaRepositoryGetter;
        this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotaRepositoryGetter);
        this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
    }
};
UsuarioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('MascotaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map