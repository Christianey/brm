import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdStar } from "react-icons/md";
import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <Flex direction="column" alignItems={"center"}>
      <Text color={"brand.primary"} fontWeight={"500"}>
        Products
      </Text>
      <Text fontSize={40} fontWeight={"600"} textAlign={"center"}>
        Meet Our Popular Products
      </Text>

      <ProductsList />
    </Flex>
  );
}
