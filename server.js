// configurando o servidor
const express = require("express")
const server = express()

// configurando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

// configurar o servidor para apresentar arquivos estáticos 
server.use(express.static('public'))

// habilitar corpo do fom
server.use(express.urlencoded({ extended: true }))

// Lista de doadores: Array
const donors = [
    {
        name: "Alan Alves",
        blood: "A+"
    },
    {
        name: "Gustavo Souza",
        blood: "B+"
    },
    {
        name: "Lucas Silva",
        blood: "AB+"
    },
    {
        name: "José Airton",
        blood: "O+"
    },
]

// configurando a apresentação da página
server.get("/", function (req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function (req, res) {
    // pegar dados do form
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})

// ouvir na porta 3000
server.listen(3000, function () {
    console.log("Servidor iniciado")
})