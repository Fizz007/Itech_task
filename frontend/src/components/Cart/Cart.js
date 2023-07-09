import { useEffect, useState } from "react";
import "../Cart/Cart.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItem();
  }, []);
  const getCartItem = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5400/ecom/cart${id}`);
      setCartItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="cart">
        
        {cartItems &&
          cartItems.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src="https://source.unsplash.com/160x160/?cricket,keeping"
                  alt=""
                  width="200px"
                />
                <p>{item.name}</p>
                <p>{item.count}</p>
                {/* <p>{state[1]}</p> */}

                <div className="quantity">
                  <button>
                    <IoAddCircle size={20} />
                  </button>

                  <p>{item.quantity}</p>

                  <button>
                    <AiFillMinusCircle size={20} />
                  </button>
                </div>
                <h2>
                  <RiDeleteBin4Fill className="pointer" />
                </h2>
              </div>
            );
          })}

        {/* {state.length > 0 && (
          <>
            <div className="total">
              <h2>₹{total.toFixed(2)}</h2>
            </div>
            <button onClick={toastnotify} className="btn pointer">
              Check Out
            </button>

           
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )} */}
      </div>
    </>
  );
};

export default Cart;
