import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ruta,
  Servicio,
} from '../models';
import {RutaRepository} from '../repositories';

export class RutaServicioController {
  constructor(
    @repository(RutaRepository)
    public rutaRepository: RutaRepository,
  ) { }

  @get('/rutas/{id}/servicio', {
    responses: {
      '200': {
        description: 'Servicio belonging to Ruta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Servicio)},
          },
        },
      },
    },
  })
  async getServicio(
    @param.path.string('id') id: typeof Ruta.prototype.id,
  ): Promise<Servicio> {
    return this.rutaRepository.servicioFK(id);
  }
}
