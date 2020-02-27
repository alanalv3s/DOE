// configurando o servidor
const express = require("express")
const server = express()

// configurando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// configurando a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html")
})

// configurar o servidor para apresentar arquivos estáticos 


// ouvir na porta 3000
server.listen(3000, function() {
    console.log("Servidor iniciado")
})