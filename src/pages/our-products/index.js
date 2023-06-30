import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import AboutBRM from "@/components/AboutBRM";
import ProductsList from "@/components/ProductsList";
import Clients from "@/components/Clients";

const ProductsListHeading = ({ heading, subHeading }) => {
  return (
    <Box mt={10} mb={2}>
      <Text
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"40px"}
        lineHeight={1}
        color={"brand.primary"}
      >
        {heading}
      </Text>
      <Text fontSize="20px" textAlign={"center"}>
        {subHeading}
      </Text>
    </Box>
  );
};

export default function OurProducts() {
  return (
    <>
      <Hero
        heroImage={"/OurProductsHero.jpg"}
        title={"Our Products"}
        text={"Explore Our High-Quality Agricultural Products"}
        showButton
      />
      <AboutBRM
        leftSide={<Image src="ProductsPageBRM.jpg" />}
        title="We Provide High-Quality
        Agricultural Products"
        text={
          "Trade with Bior Resources Management Ltd. faster, quicker and more efficiently on this online platform where you can buy your required agro produce and see what we supply anywhere around the world.At BRM we have our ready to buy raw agro crop products and shipped anywhere around the world."
        }
      />
      <ProductsListHeading
        heading={"Processed Products"}
        subHeading={"Discover our Range of Agro Processed Products"}
      />
      <ProductsList items={4} />
      <ProductsListHeading
        heading={"Raw Products"}
        subHeading={"Discover our Range of Agro Raw Products"}
      />
      <ProductsList items={4} />
      <Clients />
    </>
  );
}
