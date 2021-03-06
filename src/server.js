const express = require("express")
const server = express()
const routes = require("./routes")

//Usando template engine
server.set("view engine", 'ejs')

//Habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log('rodando'))