import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/CartSlice";
import Emptycart from "../../assets/empty.gif";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => (total += item.price), 0);
  };
  return (
    <div className="mt-10 mb-10">
      {cartItems.length === 0 ? (
        <div className="flex justify-center">
          <img src={Emptycart} alt="" />
        </div>
      ) : (
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
            {/* <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button> */}
          </div>

          {cartItems.map((item) => (
            <div class="mt-8">
              <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
                <div class="flex-shrink-0">
                  <img
                    src={item.img}
                    alt="Product image"
                    class="w-32 h-32 object-cover"
                  />
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                  <h2 class="text-lg font-bold">{item.title}</h2>
                  <p class="mt-2 text-gray-600">{item.color}</p>
                  <div class="mt-4 flex items-center">
                    {/* <span class="mr-2 text-gray-600">Quantity:</span> */}
                    <div class="flex items-center">
                      {/* <button class="bg-gray-200 rounded-l-lg px-2 py-1" disabled>
                      -
                    </button>
                    <span class="mx-2 text-gray-600">1</span>
                    <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>
                      +
                    </button> */}
                      <span class="ml-auto font-bold">{item.price}</span>

                      <button
                        className="bg-blue-500 text-white py-1 px-2 mt-4 rounded hover:bg-blue-600 mx-4"
                        onClick={() => handleRemove(item.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div class="flex justify-start items-center mt-8 mb-6">
            <span class="text-gray-600 mr-4">Total Price:</span>
            <span class="text-xl font-bold">{calculateTotal()}</span>
          </div>
          <Link
            to="/checkout"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
