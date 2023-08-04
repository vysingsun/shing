const Payments = require("../models/payments")
const mongoose = require('mongoose')


const findById = async (id) => {
  try {
    const payment = await Payments.findById(id)
    return{
      success: true,
      data: payment
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
    const payments = await Payments.find()
    return payments
    
  }catch(error){
    return error.message;
  }
}

const create = async (newpayment) => {
    try{
      const payment = await Payments.create(newpayment);
      return {
        success: true,
        data: payment
      }
    }catch(err){
      return {
        success : false,
        err : err.message
      }
    }
  }


const remove = async (id) => {
  try{
    await Payments.deleteOne({_id:id})
    return {
      success : true,
      data : "payment deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

module.exports = {
  findById,
  remove,
  findAll,
  create
}