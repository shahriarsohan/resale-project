import React from "react";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import AllProductsList from "../components/Products/AllProducts";

import Title from "../container/Title";

const Index = () => {
  return (
    <>
      <FeaturedProducts />
      {/* <AllProductsList /> */}
      <Title />
    </>
  );
};

export default Index;
