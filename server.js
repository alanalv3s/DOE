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
    return res.render("index.html", {donors})
})

// configurar o servidor para apresentar arquivos estáticos 
server.use(express.static('public'))


// Lista de doadores: Array
const donors = [
    {
        name: "Alan Alves",
        blood: "A+",
    },
    {
        name: "Gustavo Souza",
        blood: "B+",
    },
    {
        name: "Lucas Silva",
        blood: "AB+",
    },
    {
        name: "José Airton",
        blood: "O+",
    },

]


// ouvir na porta 3000
server.listen(3000, function() {
    console.log("Servidor iniciado")
})