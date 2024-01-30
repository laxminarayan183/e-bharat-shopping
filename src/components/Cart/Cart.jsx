import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/CartSlice";
import Emptycart from "../../assets/empty.gif";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center font-bold">Cart Page </h1>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <img src={Emptycart} alt="" />
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b-2 py-2 mt-5"
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[140px] block mx-auto transform -translate-y-5 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    remove
                  </button>
                </div>
                {/* You can add a remove button or quantity selector here */}
              </div>
            ))}

            <div className="mt-4">
              <p className="text-xl font-bold">Total:{calculateTotal()} </p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
