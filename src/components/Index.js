import React from "react";
import FeaturedProducts from "../components/AllProducts/FeaturedProducts";
import AllProductsList from "../components/AllProducts/AllProducts";

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
