var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const orderDetailService = require('../services/orderDetail');

// all users
router.get('/all', async (req, res) => {
  const result = await orderDetailService.findAll()
  res.json(result)
})

router.get('/:id',  async function (req, res, next) {
  const { id } = req.params;
  const result = await orderDetailService.findById(id);
  res.json(result);
})


// auth.ensureSignedIn,
router.post('/create',  async (req, res, next) => {
  const newOrderDetail = req.body
  const result = await orderDetailService.create(newOrderDetail)
  res.json(result);
})


router.post('/update/:id', async (req, res, next) => {
  const {userId, username, phone, address, street_address, country, state, postal_code, total_price, company_shipping, shipping_price} = req.body
  const {id} = req.params
  const result = await orderDetailService.update(id, {userId, username, phone, address, street_address, country, state, postal_code, total_price, company_shipping, shipping_price})
  res.json(result);
})

router.post('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  const result = await orderDetailService.remove(id);
  res.json(result);
})

module.exports = router