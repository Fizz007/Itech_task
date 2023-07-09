const Item = require("../model/itemModel");

const createItem = async (req, res) => {
  const { name, count } = req.body;
  console.log(req.body);
  try {
    const itemAdded = await Item.create({
      name,
      count,
    });
    res.status(200).json({ message: "Item Added", user: itemAdded });
  } catch (error) {
    res.status(400).json({ message: "error"  });
  }
};

const itemFind = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ message: "Item", user: items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//add item into the cart

const addItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    await Item.findByIdAndUpdate(itemId, { $inc: { count: -1 } });

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }

  
};

// Get cart item

const getCartItem = async (req, res) => {
  try {
    const cartItems = await Item.find({ count: { $lt: 5 } });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }

  
};

//remove item from cart

const removeItem = async (req, res) => {
  try {
    const { id } = req.params;

    await Item.findByIdAndUpdate(id, { $inc: { count: 1 } });

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }

 
}

module.exports = {removeItem, addItem,createItem,getCartItem,itemFind};
