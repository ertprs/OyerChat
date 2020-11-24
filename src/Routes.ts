import express from "express"
import session from "express-session"
import path from "path"
import { RequestSession } from "./Types"
import { API, Login } from "./API"

const rota = express.Router()

rota.use(session({
    name: "sessao",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 /* um dia */ }
}))

rota.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, Login.isLogado(req) ?
        "./pages/main.html" :
        "./pages/login.html"
    ))
})

rota.get("/api/logar", (req: RequestSession, res) => {
    API.verificar(req, res, Login.logar, {
        parametros: ["user", "senha"],
        // permissoes: []
    })
})

export default rota