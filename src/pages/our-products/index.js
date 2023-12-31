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
  const processedProducts = [
    {
      id: 1,
      price: 500,
      image: "/processed1.png",
      name: "Cashew Nuts",
      description:
        "Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein.",
    },
    {
      id: 2,
      price: 500,
      image: "/processed2.png",
      name: "Shea Butter",
      description:
        "Shea butter is a potent skin brightener. Vitamin E promotes regeneration of skin cells and aids recovery.",
    },
    {
      id: 3,
      price: 500,
      image: "/processed3.png",
      name: "Roasted Groundnuts",
      description:
        "Groundnuts are packed with the goodness of vitamins and minerals such as vitamin E, Magnesium, Folate.",
    },
    {
      id: 4,
      price: 500,
      image: "/processed4.png",
      name: "Palm Oil",
      description:
        "Palm oil is used for preventing vitamin A deficiency, cancer, brain disease, aging; and treating malaria.",
    },
    {
      id: 5,
      price: 500,
      image: "/processed5.png",
      name: "Vegetable Oil",
      description:
        "Help maintain a good level of skin hydration, tone the skin up, improve suppleness and regenerate it.",
    },
    {
      id: 6,
      price: 500,
      image: "/processed6.png",
      name: "Olive Oil",
      description: "Olive Oil Contains Large Amounts of Antioxidants",
    },
  ];

  const rawProducts = [
    {
      id: 7,
      price: 500,
      image: "/raw1.png",
      name: "Raw Cashew Nuts",
      description:
        "Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein.",
    },
    {
      id: 8,
      price: 500,
      image: "/raw2.png",
      name: "Cocoa",
      description:
        "Decreased inflammation, improved heart and brain health, blood sugar and weight control.",
    },
    {
      id: 9,
      price: 500,
      image: "/raw3.png",
      name: "Sesame Seeds",
      description:
        "Sesame seeds are an excellent source of manganese and calcium, both of which help your bones grow.",
    },
    {
      id: 10,
      price: 500,
      image: "/raw4.png",
      name: "Dried Ginger",
      description:
        "Eating ginger can cut down on fermentation, constipation and other causes of bloating and intestinal gas.",
    },
    {
      id: 11,
      price: 500,
      image: "/raw5.png",
      name: "Onions",
      description:
        "When you consume onions regularly and in sufficient quantity, it may help protect against chronic conditions. ",
    },
    {
      id: 12,
      price: 500,
      image: "/raw6.png",
      name: "Soya Beans",
      description:
        "Reduce the risk of a range of health problems, including cardiovascular disease, stroke, coronary heart disease.",
    },
    {
      id: 13,
      price: 500,
      image: "/raw7.png",
      name: "Dried Hibiscus Flower",
      description:
        "It works effectively for antioxidants, blood pressure, blood fat levels, liver health, weight loss.",
    },
    {
      id: 14,
      price: 500,
      image: "/raw8.png",
      name: "Peanuts/Groundnuts",
      description: "Peanuts are rich in protein, fat, and fiber.",
    },
    {
      id: 15,
      price: 500,
      image: "/raw9.png",
      name: "Palm Oil",
      description:
        "Palm oil is used for preventing vitamin A deficiency, cancer, brain disease, aging; and treating malaria.",
    },
  ];

  return (
    <>
      <Hero
        heroImage={"/OurProductsHero.jpg"}
        title={"Our Products"}
        text={"Explore Our High-Quality Agricultural Products"}
        showButton
        link={"#products"}
      />
      <AboutBRM
        leftSide={<Image src="/ProductsPageBRM.jpg" />}
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
      <ProductsList products={processedProducts} />
      <ProductsListHeading
        heading={"Raw Products"}
        subHeading={"Discover our Range of Agro Raw Products"}
      />
      <ProductsList products={rawProducts} />
      <Clients />
    </>
  );
}
