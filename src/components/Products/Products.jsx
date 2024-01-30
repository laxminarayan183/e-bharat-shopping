import React from "react";
import Img1 from "../../assets/women/wmn1.avif";
import Img2 from "../../assets/women/wmn2.avif";
import Img3 from "../../assets/women/wmn3.jpg";
import Img4 from "../../assets/women/wmn4.avif";
import Img5 from "../../assets/dress5.webp";
import { add } from "../features/CartSlice";
import { useDispatch } from "react-redux";

import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    price: 2100,
    rating: 5.0,
    color: "Blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Saree",
    price: 3000,
    rating: 4.5,
    color: "Green",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "T-shirt",
    price: 799,
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "T-shirt",
    price: 699,
    rating: 4.4,
    color: "Red",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Lehenga",
    price: 1900,
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
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
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
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
                  <span className="font-bold">price :{data.price}</span>
                </div>
                <button
                  onClick={() => handleAdd(data)}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
          {/* view all  */}
          <div className="flex justify-center">
            <Link to="/allproducts">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
