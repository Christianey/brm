import { Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdPhone, MdPlayArrow } from "react-icons/md";

export default function HomeAboutBrm() {
  return (
    <>
      <Image src={"/aboutFemale.jpg"} />
      <Flex
        alignItems={"center"}
        boxShadow={"0px 4px 57px rgba(0, 0, 0, 0.15);"}
        bgColor={"white"}
        position={"absolute"}
        borderRadius={"lg"}
        w={["200px", "200px", "250px", "250px"]}
        h="60px"
        top={"50%"}
        transform={"translate(-50%, -50%)"}
        px={4}
        gap={2}
        display={["none", "none", "flex", "flex"]}
      >
        <Circle bgColor={"#6CDC2D"} size={"30px"} zIndex={5}>
          <MdPhone color="white" />
        </Circle>
        <Flex direction={"column"} fontSize={["sm", "sm", "md", "md"]}>
          <Text>Get in Touch</Text>
          <Text fontWeight={"600"}>+234 703 054 8190</Text>
        </Flex>
      </Flex>

      <Circle
        size="80px"
        alignItems={"center"}
        bgColor={"#FF915B4D"}
        position={"absolute"}
        top={"50%"}
        right={"-25%"}
        transform={"translate(-50%, -50%)"}
        border={"2px solid #FF915B"}
        zIndex={30}
      >
        <Circle bgColor="brand.secondary" size="50px">
          <Circle
            bgColor="white"
            size="20px"
            sx={{
              "& svg": {
                color: "brand.secondary",
              },
            }}
          >
            <MdPlayArrow />
          </Circle>
        </Circle>
      </Circle>
      <Image
        src={"/aboutMale.jpg"}
        position={"absolute"}
        bottom={-20}
        right={-10}
        zIndex={3}
      />
    </>
  );
}
