const {Router} = require('express')
const router = Router()
const {
    createEtapa,
    getEtapas,
    getEtapaID,
    editEtapaID
    
} = require('../controllers/etapa')

router.post('/', createEtapa)

router.get('/', getEtapas)

router.get('/:id', getEtapaID)

router.put('/:id', editEtapaID)



module.exports = router