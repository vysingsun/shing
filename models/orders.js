"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ordersSchema = new mongoose.Schema({
   
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colors'
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sizes'
    },
    orderDetail: {
        // default: null,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderDetails'
    },
    quantity: Number,
},{
  timestamps: true,
});

var Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;