"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RutaServicioController = class RutaServicioController {
    constructor(rutaRepository) {
        this.rutaRepository = rutaRepository;
    }
    async getServicio(id) {
        return this.rutaRepository.servicioFK(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/rutas/{id}/servicio', {
        responses: {
            '200': {
                description: 'Servicio belonging to Ruta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Servicio) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutaServicioController.prototype, "getServicio", null);
RutaServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RutaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RutaRepository])
], RutaServicioController);
exports.RutaServicioController = RutaServicioController;
//# sourceMappingURL=ruta-servicio.controller.js.map