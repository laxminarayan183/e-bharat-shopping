import React from "react";
import { add } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";

const ElectronicCard = ({ data }) => {
  const dispatch = useDispatch();

  // add to cart

  const handleAdd = (data) => {
    dispatch(add(data));
  };
  return (
    <div className="mt-10 mb-10">
      <div className="text-left mb-24 ">
        <p data-aos="fade-up" className="text-sm text-primary">
          Headphone Accessories Products For You
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Expore Our Products
        </h1>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          labore sequi nihil.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">Price:{data.price}</h2>
              <FaStar className="text-yellow-400" />
              <span className="absolute bottom-11 mx-6">{data.rating}</span>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={() => handleAdd(data)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicCard;
