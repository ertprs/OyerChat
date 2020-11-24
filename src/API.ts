import {Response} from "express"
import fs from "fs"
import path from "path"
import crypto from "crypto"
import {RequestSession, APIParam, UserData} from "./Types"
import {JSONUtils, StringUtils} from "./OyerUtils"
// import User from "./User"

export class API {

    public static verificar(req: RequestSession, res: Response, fun: Function, opt: APIParam) {
        var keys = Object.keys(req.query)
        if(opt.permissoes == undefined) opt.permissoes = []
        if(!StringUtils.compareArray(keys, opt.parametros)) return res.sendStatus(405)
        if(opt.permissoes!.length > 0 && !opt.permissoes!.includes(req.session.permissao)) return res.sendStatus(403)
        res.send(fun(req, req.query))
    }
}

export class Login {

    static isLogado({session}: RequestSession) {
        return session.isLogado == true
    }

    static logar(req: RequestSession, {user, senha}: any) {
        var usuario = JSON.parse(fs.readFileSync(path.join(__dirname, "./DB/users/Usuarios.json"), "utf8"))[user] as UserData
        if(usuario == undefined) return JSONUtils.print("retorno", "O usuário não existe nos nossos registros")
        var md5 = crypto.createHash("md5").update(senha).digest("hex");
        if(usuario.hash != md5) return JSONUtils.print("retorno", "A senha do usuário não está correta")
        req.session.userID = user
        req.session.isLogado = true
        req.session.permissao = "DEFAULT"
        return JSONUtils.print("retorno", "ok")
    }
}