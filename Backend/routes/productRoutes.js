const express = require('express');
const router = express.Router();

const {
    getProducts,
    creatProduct,
    updateProducct,
    deleteProduct
} = require('../controllers/productController')

router.get('/' , getProducts)
router.post('/' , creatProduct)
router.put('/:id' , updateProducct)
router.delete('/:id' , deleteProduct)

module.exports = router;