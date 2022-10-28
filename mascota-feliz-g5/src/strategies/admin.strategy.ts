import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { HttpErrors, Request } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import parseBearerToken from "parse-bearer-token";
import { AutenticacionService } from "../services";

export class EstrategiaAdministrador implements AuthenticationStrategy {
    name: string = "Administrador";

    constructor(
        @service(AutenticacionService)
        public autenticacionService : AutenticacionService
    ) { }

    async authenticate (request: Request): Promise<UserProfile | undefined> {   
        let token = parseBearerToken(request);
        if (token) {
            let datos = this.autenticacionService.ValidarTokenJWT(token);

            if (datos.data) {
                let perfil: UserProfile = Object.assign({
                    nombre: datos.data.Nombres
                });

                return perfil;
            } else {
                throw new HttpErrors[401]("Token no válido");
            }
        } else {
            throw new HttpErrors[401]("Token no válido");
        }
    }
}