"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RutaRepository = class RutaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, estacionRepositoryGetter, servicioRepositoryGetter) {
        super(models_1.Ruta, dataSource);
        this.estacionRepositoryGetter = estacionRepositoryGetter;
        this.servicioRepositoryGetter = servicioRepositoryGetter;
        this.servicioFK = this.createBelongsToAccessorFor('servicioFK', servicioRepositoryGetter);
        this.registerInclusionResolver('servicioFK', this.servicioFK.inclusionResolver);
        this.origenFK = this.createBelongsToAccessorFor('origenFK', estacionRepositoryGetter);
        this.registerInclusionResolver('origenFK', this.origenFK.inclusionResolver);
    }
};
RutaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('EstacionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ServicioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function, Function])
], RutaRepository);
exports.RutaRepository = RutaRepository;
//# sourceMappingURL=ruta.repository.js.map