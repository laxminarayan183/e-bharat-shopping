import React from "react";
import ElectronicCard from "./ElectronicCard";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "1299",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Watch",
    price: "1599",
    rating: 4.0,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Jbl-Bass",
    price: "1999",
    rating: 3.5,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Skullcandy ",
    price: "1799",
    rating: 5.0,
    aosDelay: "600",
  },

  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "1699",
    rating: 3.9,
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky-Gaming",
    price: "2999",
    rating: 4.7,
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "AMD",
    price: "1399",
    rating: 5.0,
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img5,
    title: "Zebronics ",
    price: "999",
    rating: 4.3,
    aosDelay: "600",
  },
];

const Electronic = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <ElectronicCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Electronic;
