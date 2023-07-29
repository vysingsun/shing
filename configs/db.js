const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://vysingsun:1234@vysingsunapi.o08qbyp.mongodb.net/e-commerce?retryWrites=true&w=majority', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ",err);
  }
}
