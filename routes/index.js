const express = require('express')
const router = express.Router();

const auth = require('../middlewares/auth');


router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/item', require('./item'));
router.use('/product', require('./product'));
router.use('/color', require('./color'));
router.use('/size', require('./size'));
router.use('/card', require('./card'));
router.use('/order', require('./order'));
router.use('/orderDetail', require('./orderDetail'));
router.use('/payment', require('./payment'));


module.exports = router;