import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Servicio, ServicioRelations } from '../models';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    constructor(dataSource: MongoDataSource);
}
