import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <Flex px={[1, 4, 4, 40]} wrap={"wrap"} justify={"center"} id="products">
      {products.map((item, i) => (
        <ProductCard {...item} key={i} />
      ))}
    </Flex>
  );
}
