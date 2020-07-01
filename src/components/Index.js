import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ProductsList from "../components/Products/LatestProducts";
import NextButton from "../container/NextButton";

const Index = () => {
  return (
    <>
      <FeaturedProducts />
      <NextButton title="More" />
      <ProductsList />
      <NextButton title="More" />
      <br />
    </>
  );
};

export default Index;
