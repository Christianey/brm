import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function WhyChooseUs({ heading, title, text, bgColor, imgSrc }) {
  return (
    <Flex
      my={[20, 20, 40, 48]}
      direction={["column", "column", "column", "row"]}
      position={"relative"}
      maxWidth={"1440px"}
      mx="auto"
    >
      <Flex
        position={["static", "static", "static", "relative"]}
        flexBasis={["100%", "100%", "100%", "50%"]}
        mx={"auto"}
        zIndex={-1}
        top={-20}
        right={-20}
      >
        <Image src={imgSrc} objectFit={"cover"} />
      </Flex>

      <Flex
        flexBasis={["100%", "100%", "100%", "50%"]}
        direction={"column"}
        bgColor={bgColor}
        color={"white"}
        py={[4, 8, 8, 10]}
        px={[4, 8, 8, 10]}
        gap={2}
        ml="auto"
        justifyContent={"center"}
      >
        <Text>{heading}</Text>
        <Text
          fontSize={["1.5rem", "1.5rem", "2.5rem"]}
          lineHeight={1}
          fontWeight={"600"}
        >
          {title}
        </Text>
        <Text>{text}</Text>
      </Flex>
    </Flex>
  );
}
