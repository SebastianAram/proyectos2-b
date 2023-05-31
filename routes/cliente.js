const {Router} = require('express')
const router = Router()
const {
    createCliente,
    getClientes,
    getClienteID,
    editClienteID
    
} = require('../controllers/cliente')

router.post('/', createCliente)

router.get('/', getClientes)

router.get('/:id', getClienteID)

router.put('/:id', editClienteID)



module.exports = router