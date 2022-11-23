import { Ruta, Servicio } from '../models';
import { RutaRepository } from '../repositories';
export declare class RutaServicioController {
    rutaRepository: RutaRepository;
    constructor(rutaRepository: RutaRepository);
    getServicio(id: typeof Ruta.prototype.id): Promise<Servicio>;
}
