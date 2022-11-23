import { Entity } from '@loopback/repository';
export declare class Ruta extends Entity {
    id?: string;
    destino: string;
    tiempo_estimado: number;
    origen: string;
    servicio: string;
    [prop: string]: any;
    constructor(data?: Partial<Ruta>);
}
export interface RutaRelations {
}
export declare type RutaWithRelations = Ruta & RutaRelations;
