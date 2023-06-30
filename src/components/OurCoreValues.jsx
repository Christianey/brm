import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function OurCoreValues() {
  return (
    <Box maxW={"80%"} mx="auto">
      <Text
        fontWeight={"600"}
        fontSize={"4rem"}
        lineHeight={1}
        color={"brand.primary"}
      >
        Our Core Values
      </Text>
      <Box height="10px" width="100px" bgColor="brand.secondary" my={4} />

      <Flex
        sx={{
          "& > div": {
            maxW: ["100%", "50%", "50%", "25%"],
            flexGrow: 1,
          },
        }}
        w="full"
        wrap="wrap"
        maxW={"1000px"}
        justify={"center"}
        mx={"auto"}
      >
        <Flex justify={"center"} p={2}>
          <Image src="/CoreValue1.jpg" />
        </Flex>
        <Flex justify={"center"} p={2}>
          <Image src="/CoreValue2.jpg" />
        </Flex>
        <Flex justify={"center"} p={2}>
          <Image src="/CoreValue3.jpg" />
        </Flex>
        <Flex justify={"center"} p={2}>
          <Image src="/CoreValue4.jpg" />
        </Flex>
      </Flex>
    </Box>
  );
}
