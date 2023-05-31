const {Router} = require('express')
const router = Router()
const {
    createTipoProyecto,
    getTipoProyectos,
    getTipoProyectoID,
    editTipoProyectoID
    
} = require('../controllers/tipoProyecto')

router.post('/', createTipoProyecto)

router.get('/', getTipoProyectos)

router.get('/:id', getTipoProyectoID)

router.put('/:id', editTipoProyectoID)



module.exports = router