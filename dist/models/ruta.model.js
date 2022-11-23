"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const estacion_model_1 = require("./estacion.model");
const servicio_model_1 = require("./servicio.model");
let Ruta = class Ruta extends repository_1.Entity {
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
], Ruta.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "destino", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Ruta.prototype, "tiempo_estimado", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => estacion_model_1.Estacion, { name: 'origenFK' }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "origen", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => servicio_model_1.Servicio, { name: 'servicioFK' }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "servicio", void 0);
Ruta = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ruta);
exports.Ruta = Ruta;
//# sourceMappingURL=ruta.model.js.map