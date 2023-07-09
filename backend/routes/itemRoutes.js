const express = require('express')

const {addItem,createItem,getCartItem,itemFind,removeItem} = require('../controller/itemController')

const router = express.Router();

router.post('/register', createItem)
router.get('/items', itemFind)
router.post('/cart', addItem)
router.get('/cart', getCartItem)
router.delete('/cart/:id', removeItem)

module.exports = router;