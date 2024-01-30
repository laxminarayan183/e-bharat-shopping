import React from "react";
import Img1 from "../../assets/Kids/k1.webp";
import Img2 from "../../assets/Kids/k2.webp";
import Img3 from "../../assets/Kids/k3.avif";
import Img4 from "../../assets/Kids/k4.webp";
import Img5 from "../../assets/Kids/k5.jpg";
import { add } from "../features/CartSlice";
import { useDispatch } from "react-redux";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Kid Ethnic",
    rating: 5.0,
    price: 1999,
    color: "Red & Yellow",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Kid Ethnic",
    price: 1499,
    rating: 4.5,
    color: "White",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Kid Western",
    price: 1899,
    rating: 4.7,
    color: "Denim & Blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Kid Western",
    price: 1699,
    rating: 4.4,
    color: "White",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Kid Kurta",
    price: 1399,
    rating: 4.5,
    color: "Green",
    aosDelay: "800",
  },
];

const Kids = () => {
  const dispatch = useDispatch();

  // add to cart

  const handleAdd = (data) => {
    dispatch(add(data));
  };
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Kids Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Kids Wear
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            labore sequi nihil.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt="img"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <span className="font-bold">Price :{data.price}</span>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleAdd(data)}
                      className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all  */}
        </div>
      </div>
    </div>
  );
};

export default Kids;
