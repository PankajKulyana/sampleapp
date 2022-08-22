const express = require('express');
const router = express.Router();
const CheckoutController = require('../controllers/checkoutController')

router.get('/:checkoutId', CheckoutController.getCheckout)
router.post('/:checkoutId/billing-address', CheckoutController.addCheckoutBillingAddress)

module.exports = router