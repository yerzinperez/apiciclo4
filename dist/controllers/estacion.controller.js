"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacionController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstacionController = class EstacionController {
    constructor(estacionRepository) {
        this.estacionRepository = estacionRepository;
    }
    async create(estacion) {
        return this.estacionRepository.create(estacion);
    }
    async count(where) {
        return this.estacionRepository.count(where);
    }
    async find(filter) {
        return this.estacionRepository.find(filter);
    }
    async updateAll(estacion, where) {
        return this.estacionRepository.updateAll(estacion, where);
    }
    async findById(id, filter) {
        return this.estacionRepository.findById(id, filter);
    }
    async updateById(id, estacion) {
        await this.estacionRepository.updateById(id, estacion);
    }
    async replaceById(id, estacion) {
        await this.estacionRepository.replaceById(id, estacion);
    }
    async deleteById(id) {
        await this.estacionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/estaciones'),
    (0, rest_1.response)(200, {
        description: 'Estacion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, {
                    title: 'NewEstacion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estaciones/count'),
    (0, rest_1.response)(200, {
        description: 'Estacion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Estacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estaciones'),
    (0, rest_1.response)(200, {
        description: 'Array of Estacion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Estacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estaciones'),
    (0, rest_1.response)(200, {
        description: 'Estacion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Estacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Estacion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estaciones/{id}'),
    (0, rest_1.response)(200, {
        description: 'Estacion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Estacion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Estacion]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/estaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Estacion]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/estaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EstacionController.prototype, "deleteById", null);
EstacionController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('admin'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EstacionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EstacionRepository])
], EstacionController);
exports.EstacionController = EstacionController;
//# sourceMappingURL=estacion.controller.js.map