import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations, Estacion, Servicio } from '../models';
import { EstacionRepository } from './estacion.repository';
import { ServicioRepository } from './servicio.repository';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.id, RutaRelations> {
    protected estacionRepositoryGetter: Getter<EstacionRepository>;
    protected servicioRepositoryGetter: Getter<ServicioRepository>;
    readonly origenFK: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;
    readonly servicioFK: BelongsToAccessor<Servicio, typeof Ruta.prototype.id>;
    constructor(dataSource: MongoDataSource, estacionRepositoryGetter: Getter<EstacionRepository>, servicioRepositoryGetter: Getter<ServicioRepository>);
}
