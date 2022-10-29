import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Estacion, Servicio} from '../models';
import {EstacionRepository} from './estacion.repository';
import {ServicioRepository} from './servicio.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {

  public readonly origenFK: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;

  public readonly servicioFK: BelongsToAccessor<Servicio, typeof Ruta.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EstacionRepository') protected estacionRepositoryGetter: Getter<EstacionRepository>, @repository.getter('ServicioRepository') protected servicioRepositoryGetter: Getter<ServicioRepository>,
  ) {
    super(Ruta, dataSource);
    this.servicioFK = this.createBelongsToAccessorFor('servicioFK', servicioRepositoryGetter,);
    this.registerInclusionResolver('servicioFK', this.servicioFK.inclusionResolver);
    this.origenFK = this.createBelongsToAccessorFor('origenFK', estacionRepositoryGetter,);
    this.registerInclusionResolver('origenFK', this.origenFK.inclusionResolver);
  }
}
