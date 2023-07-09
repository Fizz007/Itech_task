import React, { useState,useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import '../Products/Products.css'

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemCount, setItemCount] = useState('');
  const [items, setItems] = useState([])
  const [cartItem, setCartItems] = useState([])

  useEffect(()=> {
    fetchItems()
  },[])

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const registerItem = async () => {
    console.log(itemName, itemCount)
    try {
      
      const response = await axios.post('http://localhost:5400/ecom/register', {
        name: itemName,
        count: itemCount
      });
      console.log('Item registered:', response.data);

      setItemName('');
      setItemCount('');
      setShowModal(false);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5400/ecom/items');
      setItems(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5400/ecom/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCart = async(itemId)=> {
    console.log("add cart")
    try {
      await axios.post('http://localhost:5400/ecom/cart', { itemId });
      fetchItems(); // Refresh the items list
      fetchCartItems(); // Refresh the cart items list
    } catch (error) {
      console.error(error);
    }    
  }

  return (
    <div>
      {/* //Form */}

      <Button variant="primary" onClick={handleShowModal}>
        Add Item
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter item count"
                value={itemCount}
                onChange={(e) => setItemCount(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={registerItem}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Products */}
      <div className='card_wrapper'>
        {items.length > 0 && items.map((elem,i)=> {
          return  <div class="card">
          
          <div class="cards">
            <div class="card-item">
              <img
                src="https://source.unsplash.com/160x160/?cricket,keeping"
                alt=""
                width="200px"
              />
              <div class="lines">
                <p class="text-center my-1">{elem.name}</p>
                <p class="text-center my-1">{elem.count}</p>
              </div>
              <button className='addCart' onClick={()=> handleCart(elem._id)}>Add TO Cart</button>
            </div>
          </div>
        </div>
        })}
      </div>
     
    </div>
  );
};

export default Products;
