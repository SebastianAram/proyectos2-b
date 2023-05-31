const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))


const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
const universidad = require('./routes/universidad')
const etapa = require('./routes/etapa')


app.use('/api/tipoProyectos', tipoProyecto)
app.use('/api/clientes', cliente)
app.use('/api/universidades', universidad)
app.use('/api/etapas', etapa)



module.exports = app