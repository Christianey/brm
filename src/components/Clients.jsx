import { Avatar, Box, Circle, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Arrow = ({ arrow = "left", onClick, style, className }) => {
  return (
    <Circle
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        zIndex: 1,
        ...(arrow === "left" && { left: -10 }),
        ...(arrow === "right" && { right: -10 }),
      }}
      onClick={onClick}
      bgColor="#00A78433"
      border={"1px solid #00A784"}
      size={"40px"}
      _before={{ content: "''" }}
    >
      <Circle
        bg="brand.primary"
        size={"30px"}
        position={"relative"}
        zIndex={"100"}
      >
        {arrow === "left" ? (
          <FaChevronLeft color="white" fill="white" size={"10px"} />
        ) : (
          <FaChevronRight color="white" fill="white" size={"10px"} />
        )}
      </Circle>
    </Circle>
  );
};

export default function Clients() {
  return (
    <Flex
      alignItems="stretch"
      py={8}
      direction={"column"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        left={0}
        bgColor={"#FF915B33"}
        zIndex={-10}
        height="100%"
        width="150px"
      />
      <Text
        alignSelf={"center"}
        color={"brand.primary"}
        sx={{ "& span": { fontWeight: "600", fontStyle: "italic" } }}
        fontSize={"2rem"}
      >
        What <span>Our Clients</span> said
      </Text>

      <Flex
        py={8}
        background="linear-gradient(
        rgba(0, 167, 132, 0.5),
        rgba(0, 167, 132, 0.5)
        ),
        url(/clientsBg.jpg)"
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        justify={"center"}
        wrap={"wrap"}
      >
        <Flex
          as={Slider}
          infinite={true}
          slidesToShow={2}
          slidesToScroll={2}
          speed={500}
          // maxW={["90%", "90%", "90%", "950"]}
          maxW={["90%", "90%", "90%", "950"]}
          mx="auto"
          prevArrow={<Arrow />}
          nextArrow={<Arrow arrow="right" />}
          responsive={[
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          <ClientCard
            image={"/client1.jpg"}
            firstName="Jide"
            lastName="Benson"
            job="Agricultural Retailer"
          />
          <ClientCard
            image={"/client2.jpg"}
            firstName="Femi"
            lastName="Martins"
            job="Small Scale Farmer"
          />
          <ClientCard
            image={"/client1.jpg"}
            firstName="Jide"
            lastName="Benson"
            job="Agricultural Retailer"
          />
          <ClientCard
            image={"/client2.jpg"}
            firstName="Femi"
            lastName="Martins"
            job="Small Scale Farmer"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export function ClientCard({ image, firstName, lastName, job }) {
  return (
    <Flex px={2} flexBasis={["100%", "100%", "50%", "50%"]}>
      <Flex
        bg="white"
        p={6}
        sx={{
          "& svg": { fill: "brand.secondary", alignSelf: "end" },
          "& hr": { bgColor: "brand.primary", height: 0.5 },
        }}
        direction={"column"}
        gap={2}
        mb={2}
      >
        <FaQuoteRight size={30} />
        <Text>
          "Working with BRM has been a game-changer for our farm. Their team of
          experts helped us optimize our crop yield, reduce our input costs, and
          improve our overall profitability.”
        </Text>
        <Box as="hr" my={2} />
        <Flex gap={4}>
          <Avatar src={image} />
          <Flex direction="column">
            <Text>
              {firstName}{" "}
              <Text as="span" fontWeight={"600"}>
                {lastName}
              </Text>
            </Text>
            <Text>{job}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
