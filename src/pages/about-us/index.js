import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import AboutBRM from "@/components/AboutBRM";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurCoreValues from "@/components/OurCoreValues";
import MeetOurTeam from "@/components/MeetOurTeam";
import WelcomeToGallery from "@/components/WelcomeToGallery";

export default function AboutUs() {
  return (
    <>
      <Hero
        heroImage={"/aboutUsHero.jpg"}
        title={"About Us"}
        text={
          "Our Products are good for the environment, and it’s good for you."
        }
      />
      <AboutBRM
        leftSide={<Image src="AboutPageBRM.jpg" alt="About Page Image"/>}
        title="Cultivating Ideas for Growth"
        text={
          "Bior Resources Management ltd. Is a business organization whose main activities are trading both locally and internationally of Agro allied produce. Bior Resources Management Ltd. Deals majorly on exporting agro products. The company exports produce, primarily agricultural raw produce across the continents."
        }
      />

      <WhyChooseUs
        title={"VISION AND MISSION STATEMENT"}
        text={
          "To ensure food increase and the supplies to customers locally and internationally at a moderate price, distributing the finest raw crop products accompanied with good management services, with a continued commitment to promote business practices and expand opportunities and career growth for and employee and economic growth."
        }
        bgColor={"brand.secondary"}
        imgSrc={"/AboutMissionVision.jpg"}
      />

      <OurCoreValues />
      <MeetOurTeam />
      <WelcomeToGallery />
    </>
  );
}
