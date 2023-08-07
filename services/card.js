const Cards = require("../models/cards")
const mongoose = require('mongoose')


const findById = async (id) => {
  try {
    const card = await Cards.findById(id).populate(['color','size', 'product', 'user'])
    return{
      success: true,
      data: card
    }
  } catch (error) {
    return{
      success:false,
      error: error.message
    }
  }
}

const findAll = async (req,res) => {
  try{
    const cards = await Cards.find().populate(['color','size', 'product', 'user'])
    return {
      success: true,
      data: cards
    };
  }catch(error){
    throw new Error(error)
  }
}

const create = async (newCard) => {
    try{
      const card = await Cards.create(newCard);
      return {
        success: true,
        data: card
      }
    }catch(err){
      return {
        success : false,
        err : err.message
      }
    }
  }

const update = async (id, newCard) => {
  try {
    const card = await Cards.findById(id)
    card.user = newCard.user
    card.product = newCard.product
    card.color = newCard.color
    card.size = newCard.size
    card.quantity = newCard.quantity
    await card.save()
    return {
      success: true,
      data: card
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const remove = async (id) => {
  try{
    console.log(id);
    await Cards.deleteOne({_id:id})
    return {
      success : true,
      data : "card deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

const deleteCardByUserId = async (userId) => {
  try {
    console.log(userId);
    await Cards.findOneAndDelete({user:userId})
    return {
      success : true,
      data : "Cards have deleted by userId!!"
    }
  } catch (error) {
    return{
      success : false,
      error : error.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
  deleteCardByUserId
}