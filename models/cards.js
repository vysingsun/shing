"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cardsSchema = new mongoose.Schema({
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
    quantity: Number,
},{
  timestamps: true,
});

var Cards = mongoose.model('Cards', cardsSchema);
module.exports = Cards;