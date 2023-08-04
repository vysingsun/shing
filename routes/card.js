var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const cardService = require('../services/card');

// all users
router.get('/all', async (req, res) => {
  const result = await cardService.findAll()
  res.json(result)
})

router.get('/:id',  async function (req, res, next) {
  const { id } = req.params;
  const result = await cardService.findById(id);
  res.json(result);
})


// auth.ensureSignedIn,
router.post('/create',  async (req, res, next) => {
  const {user, product, color, size, quantity} = req.body
  const result = await cardService.create({user, product, color, size, quantity})
  res.json(result);
})


router.post('/update/:id', async (req, res, next) => {
  const {user, product, color, size, quantity} = req.body
  const {id} = req.params
  const result = await cardService.update(id, {user, product, color, size, quantity})
  res.json(result);
})

router.post('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  const result = await cardService.remove(id);
  res.json(result);
})

module.exports = router