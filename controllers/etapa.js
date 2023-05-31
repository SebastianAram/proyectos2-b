const Etapa = require('../models/etapa')
const {request, response} = require('express')





const createEtapa = async (req = request, res = response) => {
    console.log(req.body)
    
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ''
        console.log(nombre)
        const etapaBD = await Etapa.findOne({nombre})
        if(etapaBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }   
}



const getEtapas = async (req = request, res = response) => {
    try{    
        const etapasDB = await Etapa.find()
        return res.json(etapasDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}



const getEtapaID = async (req = request, res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const query = {_id: id}
        const etapaBD = await Etapa.findOne(query)
        return res.json(etapaBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




const editEtapaID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaactualizacion = new Date()
        const etapaedit = await Etapa.findByIdAndUpdate(id, data, {new: true})
        console.log(etapaedit)
        return res.json(etapaedit)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}




module.exports = {
    createEtapa,
    getEtapas,
    getEtapaID,
    editEtapaID
}