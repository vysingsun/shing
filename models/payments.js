"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    orderDetailId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderDetails'
    },
    card_number:{
        type: String,
        required: true
    },
    name_on_card:{
        type: String,
        required: true
    },
    date_of_card: {
        type: String,
        required: true
    },
    cvv:{
        type: String,
        required: true
    },
},{
  timestamps: true,
});

var Payments = mongoose.model('Payments', paymentsSchema);
module.exports = Payments;