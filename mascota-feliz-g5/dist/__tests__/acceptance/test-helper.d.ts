import { MascotaFelizG5Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: MascotaFelizG5Application;
    client: Client;
}
