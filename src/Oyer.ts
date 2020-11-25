import express from "express"
import routes from "./Routes"
const app = express()

app.use("/", routes)
app.use("/public", express.static(__dirname + "/public"));

app.listen(80, function () {
    console.log("servidor iniciado\n")
})