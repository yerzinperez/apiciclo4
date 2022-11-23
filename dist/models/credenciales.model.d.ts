import { Model } from '@loopback/repository';
export declare class Credenciales extends Model {
    usuario: string;
    contrasenia: string;
    constructor(data?: Partial<Credenciales>);
}
export interface CredencialesRelations {
}
export declare type CredencialesWithRelations = Credenciales & CredencialesRelations;
