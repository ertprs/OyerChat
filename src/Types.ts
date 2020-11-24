import {Request} from "express"

export type RequestSession = Request & {
    session: any;
}

export interface APIParam {
    parametros: Array<string>;
    permissoes?: Array<string>;
}

export interface UserData {
    email: string;
    hash: string;
    nascimento: string
}