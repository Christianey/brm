import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  return (
    <>
      <ProductCard bgColor={"#9B4B0E1A"} imgSrc={"/product1.png"} />
      <ProductCard bgColor={"#637B381A"} imgSrc={"/product2.png"} />
      <ProductCard bgColor={"#1F1E241A"} imgSrc={"/product3.png"} />
    </>
  );
};
export default function ProductsList({ items = 1 }) {
  return (
    <Flex px={[1, 4, 4, 40]} wrap={"wrap"} justify={"center"} id="products">
      {[...Array(items)].map((item, i) => (
        <ProductCards key={i} />
      ))}
    </Flex>
  );
}
