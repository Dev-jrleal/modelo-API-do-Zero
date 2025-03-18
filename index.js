const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

let piadas = [
    { 
        id: '1',
        conteudo:'piada super engraçada',
        autor:'joao' 
    }
] 
app.get('/piadas', (req, res) => {
    res.status(200).send(piadas) 
})
app.get('/piadas/:id', (req, res) => {
    const piada = piadas.find(p => p.id === req.params.id)
    if (!piada) {
        return res.status(404).send("Erro: Piada nao encontrada")
    }
    res.status(200).send(piada)
})

app.post('/piadas', (req, res) => {
    const piada = {
        id: uuidv4(),
        conteudo: req.body.conteudo,
        autor: req.body.autor
    }
    if (piada.conteudo && piada.autor) {
        piadas.push(piada)
        res.status(201).send(piadas)
    } else {
        res.status(400).send(`Erro: conteudo ou autor não foram informados`)
    }
})

app.put('/piadas/:id', (req, res) => {
    const piada = piadas.find(p => p.id === req.params.id)
    if (!piada) {
        return res.status(404).send("Erro: Piada nao encontrada")
    }
    if(!req.body.conteudo || !req.body.autor) {
        return res.status(400).send(`Erro: Faltou conteudo ou autor. Item não atualizado`)
    }
    piada.conteudo = req.body.conteudo
    piada.autor = req.body.autor
    res.status(200).send(piada)
})

app.delete('/piadas/:id', (req, res) => {
    const index = piadas.findIndex(p => p.id === req.params.id)
    if (index === -1) {
        return res.status(404).send("Erro: Piada não encontrada")
    }
    const deletedPiada = piadas.splice(index, 1)
    res.status(200).send('Piada deletada com sucesso')  
})
