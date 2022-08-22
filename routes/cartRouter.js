const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController')

router.post('', CartController.createCart)
router.post('/:cartId/items', CartController.addCartItems)
router.get('/:cartId', CartController.getCart)
router.put('/:cartId/items/:itemId', CartController.updateCartItems)
router.delete('/:cartId/items/:itemId', CartController.deleteCartItems)
router.delete('/:cartId', CartController.deleteCart)

module.exports = router
