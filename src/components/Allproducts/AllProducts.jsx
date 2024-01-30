import React from "react";
import Kids from "../Kids/Kids";
import TopProducts from "../TopProducts/TopProducts";
import Electronic from "../Electronic/Electronic";
import Products from "../Products/Products";

const AllProducts = () => {
  return (
    <div>
      <Kids />
      <TopProducts />
      <Products />
      <Electronic />
    </div>
  );
};

export default AllProducts;
