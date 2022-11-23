import { Entity } from '@loopback/repository';
export declare class Estacion extends Entity {
    id?: string;
    nombre: string;
    direccion: string;
    coordenada_x: number;
    coordenada_y: number;
    tipo: string;
    [prop: string]: any;
    constructor(data?: Partial<Estacion>);
}
export interface EstacionRelations {
}
export declare type EstacionWithRelations = Estacion & EstacionRelations;
