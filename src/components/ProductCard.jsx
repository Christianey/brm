import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdStar } from "react-icons/md";

export default function ProductCard({ bgColor, imgSrc }) {
  const router = useRouter();
  return (
    <Box
      p={2}
      flexBasis={["100%", "50%", "50%", "33.33333%"]}
      onClick={(e) => {
        router.push("/product");
      }}
      cursor={"pointer"}
    >
      <Flex
        bgColor={bgColor}
        h={"290px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={imgSrc} alt="Product Image"/>
      </Flex>
      <Text fontWeight={"600"}>Raw Cashew Nuts (RCN)</Text>

      <Text fontSize={"sm"} color={"#777777"}>
        Cashews are low in sugar and rich in fiber, heart- healthy fats, and
        plant protein.
      </Text>

      <Flex justify={"space-between"} my={3}>
        <Flex>
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </Flex>

        <Text color="brand.primary">NGN500</Text>
      </Flex>

      <Flex
        gap={2}
        sx={{
          "& button": {
            flexGrow: 1,
            bgColor: "transparent",
            borderWidth: "1px",
            borderRadius: "none",
          },
        }}
      >
        <Button
          borderColor={"brand.primary"}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push("/check-out");
          }}
        >
          Buy Now
        </Button>
        <Button borderColor={"brand.secondary"}>Add to Cart</Button>
      </Flex>
    </Box>
  );
}
