import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LearnMoreButton from "./LearnMoreButton";

export default function Hero({ showButton, text, title, heroImage, link }) {
  return (
    <Flex
      w="full"
      h={["40vh", "40vh", "90vh", "90vh"]}
      overflow={"hidden"}
      position={"relative"}
      bgImage={heroImage}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Flex
        direction={"column"}  
        zIndex={"100"}
        color={"white"}
        justifyContent={"center"}
        pl={[8, 8, 16]}
        w={["100%", "100%", "100%", "50%"]}
        position={"relative"}
        top={["0", "0", "50%", "50%"]}
        transform={[
          "translateY(0%)",
          "translateY(0%)",
          "translateY(-50%)",
          "translateY(-50%)",
        ]}
        my={8}
      >
        <Text>{title}</Text>
        <Text fontSize={["1.5rem", "2rem", "3rem", "3rem"]} fontWeight={"700"}>
          {text}
        </Text>
        {showButton && <LearnMoreButton variant="secondary" link={link} />}
      </Flex>

      <Image
        src="/grunge.png"
        position={"absolute"}
        bottom={["-10px", "-10px", "-30px", "-60px"]}
        width={"full"}
        alt="background grunge effect"
      />
    </Flex>
  );
}
