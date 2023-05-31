const {Router} = require('express')
const router = Router()
const {
    createUniversidad,
    getUniversidades,
    getUniversidadID,
    editUniversidadID
    
} = require('../controllers/universidad')

router.post('/', createUniversidad)

router.get('/', getUniversidades)

router.get('/:id', getUniversidadID)

router.put('/:id', editUniversidadID)



module.exports = router