import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    placa: string;
    nombre_conductor: string;
    dinero_recogido: number;
    ruta: string;
    [prop: string]: any;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export declare type ServicioWithRelations = Servicio & ServicioRelations;
