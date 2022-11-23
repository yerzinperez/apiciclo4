import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class AuthService {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    GenerarClave(): any;
    CifrarClave(clave: string): any;
    GenerarTokenJWT(usuario: Usuario): any;
    validarTokenJWT(token: string): any;
    IdentificarPersona(correo: string, contrasenia: string): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
}
