"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioController = class ServicioController {
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async create(servicio) {
        return this.servicioRepository.create(servicio);
    }
    async count(where) {
        return this.servicioRepository.count(where);
    }
    async find(filter) {
        return this.servicioRepository.find(filter);
    }
    async updateAll(servicio, where) {
        return this.servicioRepository.updateAll(servicio, where);
    }
    async findById(id, filter) {
        return this.servicioRepository.findById(id, filter);
    }
    async updateById(id, servicio) {
        await this.servicioRepository.updateById(id, servicio);
    }
    async replaceById(id, servicio) {
        await this.servicioRepository.replaceById(id, servicio);
    }
    async deleteById(id) {
        await this.servicioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, {
                    title: 'NewServicio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios/count'),
    (0, rest_1.response)(200, {
        description: 'Servicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Servicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of Servicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Servicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Servicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Servicio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Servicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Servicio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Servicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Servicio]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "deleteById", null);
ServicioController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('admin'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioController);
exports.ServicioController = ServicioController;
//# sourceMappingURL=servicio.controller.js.map