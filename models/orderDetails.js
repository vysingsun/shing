"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cardsSchema = new mongoose.Schema({ 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    username: {
        type: String,
    required: true
    },
    phone: {
        type: String,
    required: true
    },
    address: {
        type: String,
    required: true
    },
    street_address: {
        type: String,
    required: true
    },
    country: {
        type: String,
    required: true
    },
    state: {
        type: String,
    required: true
    },
    postal_code: {
        type: String,
    required: true
    },
    total_price: Number,
    company_shipping: {
        type: String,
    required: true
    },
    shipping_price: Number,
},{
  timestamps: true,
});

var OrderDetail = mongoose.model('OrderDetails', cardsSchema);
module.exports = OrderDetail;