import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Estacion} from './estacion.model';
import {Servicio} from './servicio.model';

@model({settings: {strict: false}})
export class Ruta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  @property({
    type: 'number',
    required: true,
  })
  tiempo_estimado: number;

  @belongsTo(() => Estacion, {name: 'origenFK'})
  origen: string;

  @belongsTo(() => Servicio, {name: 'servicioFK'})
  servicio: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
