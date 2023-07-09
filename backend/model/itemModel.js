const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      
    },
    count: { 
      type: String,
      
    },   
  });
  
  const Item = mongoose.model("Item", itemSchema);
  
  module.exports = Item;