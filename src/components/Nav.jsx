import {
  Button,
  Circle,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md";

const navLinks = ["Home", "About Us", "Our Products", "Our Services"];
const CustomNav = ({ isMobile, display = "flex" }) => {
  const mobile = { flexDirection: "column", alignItems: "center", py: 4 };

  return (
    <Flex
      gap={4}
      color={"brand.primary"}
      fontWeight={"400"}
      alignItems={"center"}
      display={display}
      textAlign={"center"}
      {...(isMobile && mobile)}
    >
      {navLinks.map((link) => {
        if (link === "Home")
          return (
            <Link
              // style={({ isActive }) => {
              //   return {
              //     borderBottom: isActive ? "4px solid #FF915B" : "",
              //   };
              // }}
              key={link}
              href={"/"}
            >
              {link}
            </Link>
          );
        return (
          <Link
            // style={({ isActive }) => {
            //   return {
            //     borderBottom: isActive ? "4px solid #FF915B" : "",
            //   };
            // }}
            key={link}
            href={`/${link.toLowerCase().replace(" ", "-")}`}
          >
            {link}
          </Link>
        );
      })}
      {isMobile && (
        <Link
          // style={({ isActive }) => {
          //   return {
          //     borderBottom: isActive ? "4px solid #FF915B" : "",
          //   };
          // }}
          href={"/contact-us"}
        >
          Contact Us
        </Link>
      )}
    </Flex>
  );
};
export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <Flex
        py={[1, 2, 2, 4]}
        px={[1, 4, 10, 20]}
        alignItems={"center"}
        minH="10vh"
        gap={4}
      >
        <Flex className="bor" alignItems={"center"} as={Link} gap={2} href={"/"}>
          <Image height={"10"} src="/BRMLogoBlack.png" />
          <Text fontWeight={"600"} lineHeight={1} display={["none", "none", "none", "block"]}>
            Bior Resources <br /> Management
          </Text>
        </Flex>

        <Flex gap={4} ml="auto" fontWeight={"500"} alignItems={"center"}>
          <CustomNav display={["none", "none", "flex", "flex"]} />
        </Flex>
        <IconButton
          icon={showNav ? <MdClose /> : <MdMenu />}
          bg="#00A78433"
          color="#00A784"
          p={2}
          onClick={() => setShowNav(!showNav)}
          display={["flex", "flex", "none", "none"]}
        />
        <Button
          fontSize={"15px"}
          color={"#00A784"}
          border={"1px solid #00A78433"}
          bg="rgb(0 167 132 / 20%)"
          p={1}
          py={0}
          display={["none", "none", "flex", "flex"]}
          as={Link}
          justifyContent={"center"}
          align="center"
          href="/contact-us"
        >
          Contact us
        </Button>

        <Circle color={"branding.primary"} bg="#00A78433" size={10}>
          <MdOutlineShoppingCart color="#00A784" />
        </Circle>
      </Flex>
      {showNav && <CustomNav isMobile />}
    </nav>
  );
}
