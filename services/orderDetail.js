const OrderDetails = require("../models/orderDetails")
const mongoose = require('mongoose')


const findById = async (id) => {
  try {
    const orderDetail = await OrderDetails.findById(id)
    return{
      success: true,
      data: orderDetail
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
    const orderDetails = await OrderDetails.find()
    return orderDetails
    
  }catch(error){
    return error.message;
  }
}

const create = async (neworderDetail) => {
    try{
      const orderDetail = await OrderDetails.create(neworderDetail);
      return {
        success: true,
        data: orderDetail
      }
    }catch(err){
      return {
        success : false,
        err : err.message
      }
    }
  }

const update = async (id, newOrderDetail) => {
  try {
    const orderDetail = await OrderDetails.findById(id)
    orderDetail.user = newOrderDetail.user
    orderDetail.product = newOrderDetail.product
    orderDetail.color = newOrderDetail.color
    orderDetail.size = newOrderDetail.size
    orderDetail.quantity = newOrderDetail.quantity
    await orderDetail.save()
    return {
      success: true,
      data: orderDetail
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
    await OrderDetails.deleteOne({_id:id})
    return {
      success : true,
      data : "orderDetail deleted"
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
  update,
  remove,
  findAll,
  create
}