import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import LearnMoreButton from "./LearnMoreButton";

export default function WelcomeToGallery() {
  return (
    <Flex
      maxW={"80%"}
      mx="auto"
      wrap={"wrap"}
      justifyContent={"center"}
      align="center"
      direction={["column", "column", "row", "row"]}
    >
      <Flex
        direction={"column"}
        flexBasis={["100%", "100%", "100%", "40%"]}
        gap={4}
      >
        <Text
          fontWeight={"600"}
          fontSize={"4rem"}
          lineHeight={1}
          color={"brand.primary"}
        >
          Welcome to Our Gallery
        </Text>
        <Box height="10px" width="100px" bgColor="brand.secondary" my={4} />
        <Text>
          Explore our captivating gallery showcasing the vibrant world of
          agriculture. Immerse yourself in a visual journey that highlights the
          beauty, diversity, and innovation within the agricultural industry.
        </Text>
        <LearnMoreButton variant="primary" />
      </Flex>

      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={2}
        placeContent={"center"}
        flexBasis={["100%", "100%", "100%", "60%"]}
        maxWidth="550px"
        maxHeight="380px"
        p={4}
      >
        <GridItem
          w="100%"
          h="100%"
          gridRow={"1/3"}
          rowSpan={"2"}
          gridColumn={"1/2"}
        >
          <Image src="/gallery1.jpg" />
        </GridItem>
        <GridItem w="100%" h="100%" gridRow={"3/4"} gridColumn={"1/2"}>
          <Image src="/gallery2.jpg" />
        </GridItem>
        <GridItem w="100%" h="100%" gridRow={"1/2"} gridColumn={"2/3"}>
          <Image src="/gallery4.jpg" />
        </GridItem>
        <GridItem w="100%" h="100%" gridRow={"2/4"} gridColumn={"2/3"}>
          <Image src="/gallery3.jpg" />
        </GridItem>
      </Grid>
    </Flex>
  );
}
