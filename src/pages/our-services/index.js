import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import LearnMoreButton from "@/components/LearnMoreButton";

const Service = ({ reverse, imgSrc, number, title, text }) => {
  return (
    <Flex
      my={2}
      justifyContent={"center"}
      px={[1, 2, 4, 20]}
      py={6}
      maxW="1020px"
      mx="auto"
      alignItems={["start", "start", "center", "center"]}
      direction={[
        "column",
        "column",
        "column",
        reverse ? "row" : "row-reverse",
      ]}
      minH={"300px"}
      gap={8}
    >
      <Flex
        direction={"column"}
        flexBasis={["100%", "100%", "70%", "50%"]}
        align={"start"}
      >
        <Text
          color="brand.primary"
          fontSize={"80px"}
          fontWeight={"900"}
          lineHeight={"114.5%"}
          sx={{
            WebkitTextStroke: "1px #00A78433",
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "3px",
          }}
        >
          {number}
        </Text>
        <Text fontWeight={"600"} fontSize={"40px"} maxW={"500px"}>
          {title}
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"20px"}
          color="#777777"
          maxW={"360px"}
        >
          {text}
        </Text>
      </Flex>

      <Flex
        justify={"center"}
        borderRadius={"lg"}
        position={"relative"}
        alignSelf={"center"}
      >
        <Image src={imgSrc} objectFit={"cover"} h="100%" />
      </Flex>
    </Flex>
  );
};

export default function OurServices() {
  return (
    <>
      <Hero
        heroImage={"/OurServicesHero.jpg"}
        title={"Our Services"}
        text={"Discover Our Comprehensive Freight Agricultural Services"}
        showButton
      />

      <Box maxW={"1000px"} px={10} mx="auto" my={6}>
        <Text color={"brand.primary"}>OUR SERVICES</Text>
        <Flex
          gap={[2, 2, 4, 10]}
          align="center"
          direction={["column", "column", "column", "row"]}
        >
          <Text fontSize={"30px"} fontWeight={"600"}>
            Unlock your potentials today with our express freight services you
            can trust.
          </Text>
          <Text fontSize={"20px"} color={"#777"}>
            At Bior Resources Management ltd., we are passionate to manage your
            freight services which include
          </Text>
        </Flex>
      </Box>

      <Box py={10} bgColor={"rgba(119, 119, 119, 0.05)"}>
        <Service
          imgSrc={"/Service1.jpg"}
          number={"01"}
          title={"Managing Demurrage"}
          text={
            "Bior Resources Management helps effectively handle and control the charges incurred when cargo exceeds the allowed time for loading or unloading at a port or terminal."
          }
        />
        <Service
          imgSrc={"/Service2.jpg"}
          number={"02"}
          title={"Port charges"}
          text={
            "Bior Resources Management helps manage Port charges, fees and costs levied by port authorities or terminal operators for the use of their port facilities"
          }
          reverse
        />
        <Service
          imgSrc={"/Service3.jpg"}
          number={"03"}
          title={"Seamless movement of the consignment to your Destination"}
          text={
            "Bior Resources Management helps effectively handle and control the seamless movement of your consignment."
          }
        />
        <Flex maxW="1020px" mx="auto">
          <LearnMoreButton buttonText="Let's Talk" buttonProps={{ml: "auto", mr: 8}} />
        </Flex>
      </Box>

      <Flex
        gap={4}
        justifyContent={"center"}
        px={[1, 2, 4, 20]}
        py={6}
        maxW={["80%", "80%", "80%", "80%"]}
        mx="auto"
        align="center"
        direction={["column", "column", "column", "row"]}
      >
        <Flex direction={"column"} flexBasis={["100%", "100%", "70%", "50%"]}>
          <Text color="brand.primary">WHY CHOOSE US</Text>
          <Text fontWeight={"600"} fontSize={"40px"}>
            To receive high quality and personalized service and products,
            choose us to meet your demand.
          </Text>
        </Flex>

        <Flex justify={"center"} borderRadius={"lg"} position={"relative"}>
          <Image src="/WhyChooseUsServices.jpg" />
        </Flex>
      </Flex>

      <Clients />
    </>
  );
}
