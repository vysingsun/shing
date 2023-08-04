const Orders = require("../models/orders")
const mongoose = require('mongoose')

// const create = async (newCategory) => {
//     try{
//       const order = await Orders.create(newCategory);
//       return {
//         success: true,
//         data: order
//       }
//     }catch(err){
//       return {
//         success : false,
//         err : err.message
//       }
//     }
// }

const create = async (newCard) => {
    try{
      const card = await Orders.create(newCard);
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
const remove = async (id) => {
  try{
    await Orders.deleteMany()
    return {
      success : true,
      data : "All Order have been deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}
module.exports = {
    create,
    remove
}