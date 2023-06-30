import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Benefit = ({ heading, details }) => {
  return (
    <Flex basis={["100%", "100%", "50%", "25%"]} px={2} gap={2}>
      <Box
        boxSize={"15px"}
        flexBasis={"15px"}
        minW={"15px"}
        bgColor={"brand.secondary"}
        mt={1}
      />
      <Flex direction="column">
        <Text fontWeight={"600"}>{heading}</Text>
        <Text>{details}</Text>
      </Flex>
    </Flex>
  );
};

export default function Benefits() {
  const benefitsArray = [
    {
      heading: "Industry Oriented",
      details: "Ecosystem support for food production",
    },
    {
      heading: "Sustainability",
      details:
        "We provide agricultural products for today’s society around the world.",
    },
    {
      heading: "Product Guarantee",
      details: "We offer top notch products that are pure and natural.",
    },
    {
      heading: "Services",
      details:
        "Efficiently meeting your freight needs every time and anywhere in Nigeria.",
    },
  ];

  return (
    <Flex mx={[1, 2, 2, 16]} py={6} wrap={"wrap"} my={8}>
      {benefitsArray.map((benefit, i) => (
        <Benefit key={i} {...benefit} />
      ))}
    </Flex>
  );
}
