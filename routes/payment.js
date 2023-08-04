var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const paymentService = require('../services/payment');

// all users
router.get('/all', async (req, res) => {
  const result = await paymentService.findAll()
  res.json(result)
})

router.get('/:id',  async function (req, res, next) {
  const { id } = req.params;
  const result = await paymentService.findById(id);
  res.json(result);
})


// auth.ensureSignedIn,
router.post('/create',  async (req, res, next) => {
  const newPatment = req.body
  const result = await paymentService.create(newPatment)
  res.json(result);
})

router.post('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  const result = await paymentService.remove(id);
  res.json(result);
})

module.exports = router