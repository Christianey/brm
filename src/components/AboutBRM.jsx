import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LearnMoreButton from "./LearnMoreButton";

export default function AboutBRM({ leftSide, title, text, wide }) {
  return (
    <Flex
      gap={wide ? [20, 20, 14] : 4}
      justifyContent={"center"}
      px={[1, 2, 4, 20]}
      py={6}
      maxW={["80%", "80%", "80%", "80%"]}
      mx="auto"
      direction={["column", "column", "column", "row"]}
    >
      <Flex justify={"center"} borderRadius={"lg"} position={"relative"}>
        <Box position={"relative"}>{leftSide}</Box>
      </Flex>

      <Flex direction={"column"} flexBasis={["100%", "100%", "70%", "50%"]}>
        <Text color="brand.primary">ABOUT BRM</Text>
        <Text fontWeight={"600"} fontSize={"3rem"} lineHeight={1}>
          {title}
        </Text>
        <Box height="5px" width="100px" bgColor="brand.secondary" my={4} />
        <Text>{text}</Text>
        <LearnMoreButton variant="primary" buttonProps={{ marginTop: 8 }} />
      </Flex>
    </Flex>
  );
}
