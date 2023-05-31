const Cliente = require('../models/cliente')
const {request, response} = require('express')





const createCliente = async (req = request, res = response) => {
    console.log(req.body)
    
    try{
        const data = req.body
        const email = data.email
        const clienteBD = await Cliente.findOne({email})
        if(clienteBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        
        const cliente = new Cliente(data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getClientes = async (req = request, res = response) => {
    try{    
        const clientesDB = await Cliente.find()
        return res.json(clientesDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getClienteID = async (req = request, res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const query = {_id: id}
        const clienteDB = await Cliente.findOne(query)
        return res.json(clienteDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}



const editClienteID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaactualizacion = new Date()
        const clienteedit = await Cliente.findByIdAndUpdate(id, data, {new: true})
        console.log(clienteedit)
        return res.json(clienteedit)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




module.exports = {
    createCliente,
    getClientes,
    getClienteID,
    editClienteID

}