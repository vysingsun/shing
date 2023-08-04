var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const orderService = require('../services/order');

// // auth.ensureSignedIn,
// router.post('/create',  async (req, res, next) => {
//   const {name, desc, imageUrl } = req.body
//   const result = await categoryService.create({name, desc, imageUrl});
//   res.json(result);
// })

router.post('/create', async (req, res, next) => {
    const newOrder = req.body
    const result = await orderService.create(newOrder)
    res.json(result);
})

router.post('/deleteall', async (req, res, next) => {
    const result = await orderService.remove();
    res.json(result);
})

module.exports = router