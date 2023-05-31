const TipoProyecto = require('../models/tipoProyecto')
const {request, response} = require('express')





const createTipoProyecto = async (req = request, res = response) => {
    console.log(req.body)
    
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ''
        console.log(nombre)
        const tipoProyectoBD = await TipoProyecto.findOne({nombre})
        if(tipoProyectoBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }   
}



const getTipoProyectos = async (req = request, res = response) => {
    try{    
        const tipoProyectosDB = await TipoProyecto.find()
        return res.json(tipoProyectosDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getTipoProyectoID = async (req = request, res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const query = {_id: id}
        const tipoProyectoBD = await TipoProyecto.findOne(query)
        return res.json(tipoProyectoBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




const editTipoProyectoID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaactualizacion = new Date()
        const tipoProyectoedit = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        console.log(tipoProyectoedit)
        return res.json(tipoProyectoedit)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




module.exports = {
    createTipoProyecto,
    getTipoProyectos,
    getTipoProyectoID,
    editTipoProyectoID
}