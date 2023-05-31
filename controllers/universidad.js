const Universidad = require('../models/universidad')
const {request, response} = require('express')





const createUniversidad = async (req = request, res = response) => {
    console.log(req.body)
    
    try{
        const data = req.body
        const nombre = data.nombre
        
        const universidadBD = await Universidad.findOne({nombre})
        if(universidadBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        
        const universidad = new Universidad(data)
        console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getUniversidades = async (req = request, res = response) => {
    try{    
        const universidadesBD = await Universidad.find()
        return res.json(universidadesBD)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getUniversidadID = async (req = request, res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const query = {_id: id}
        const universidadBD = await Universidad.findOne(query)
        return res.json(universidadBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




const editUniversidadID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaactualizacion = new Date()
        const universidadedit = await Universidad.findByIdAndUpdate(id, data, {new: true})
        console.log(universidadedit)
        return res.json(universidadedit)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




module.exports = {
    createUniversidad,
    getUniversidades,
    getUniversidadID,
    editUniversidadID
}