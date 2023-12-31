import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProductsList from "./ProductsList";

const products = [
  {
    id: 16,
    price: 500,
    image: "/product1.png",
    name: "Raw Cashew Nuts (RCN)",
    description:
      "Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein.",
  },
  {
    id: 17,
    price: 500,
    image: "/product2.png",
    name: "Shea Butter",
    description:
      "Shea butter works like an emollient. It might help soften or smooth dry skin.",
  },
  {
    id: 18,
    price: 500,
    image: "/product3.png",
    name: "Sesame Seeds",
    description:
      "Sesame seeds are an excellent source of manganese and calcium, both of which help your bones grow.",
  },
];

export default function Products() {
  return (
    <Flex direction="column" alignItems={"center"}>
      <Text color={"brand.primary"} fontWeight={"500"}>
        Products
      </Text>
      <Text fontSize={40} fontWeight={"600"} textAlign={"center"}>
        Meet Our Popular Products
      </Text>

      <ProductsList products={products} />
    </Flex>
  );
}
