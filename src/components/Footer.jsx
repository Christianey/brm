import { Box, Divider, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { TfiLinkedin } from "react-icons/tfi";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <Box position={"relative"} mt={32} color={"white"} mx="auto">
      <Image
        src="/footerGrunge.png"
        w="full"
        position={"absolute"}
        top={["-32px", "-40px", "-50px"]}
        zIndex={5}
      />

      <Flex
        bg="brand.primary"
        px={[2, 2, 10, 40]}
        py={10}
        zIndex={10}
        position={"relative"}
        gap={4}
        w="full"
      >
        <Flex direction={"column"} gap={4} mx="auto">
          {/* 1st row flex */}
          <Flex gap={14} direction={["column", "column", "row", "row"]}>
            <Flex direction={"column"} flexBasis={"25%"} gap={2}>
              <Image
                height={"10"}
                src="/BRMLogoWhite.png"
                alignSelf={"start"}
              />

              <Text>
                Bior Resources Management Ltd. Deals majorly on exporting agro
                products. The company exports produce, primarily agricultural
                raw produce across the continents.
              </Text>
            </Flex>

            <Flex
              gap={8}
              direction={["column", "column", "row", "row"]}
              flexGrow={1}
              sx={{ "& > div": { flexGrow: 1 } }}
            >
              <Flex direction={"column"} gap={4}>
                <Text fontWeight={"700"}>Quick Links</Text>
                <Text as={Link} href="/">
                  Home
                </Text>
                <Text as={Link} href="/about-us">
                  About Us
                </Text>
                <Text as={Link} href="/our-products">
                  Our Products
                </Text>
                <Text as={Link} href="/contact-us">
                  Contact Us
                </Text>
              </Flex>

              <Flex direction={"column"} gap={4}>
                <Text fontWeight={"700"}>Our Products</Text>
                <Text>Cocoa</Text>
                <Text>Raw Cashew Nuts (RCN)</Text>
                <Text>Shea Butter</Text>
                <Text>Sesame Seeds</Text>
              </Flex>

              <Flex direction={"column"} gap={4}>
                <Text fontWeight={"700"}>Contact</Text>
                <Text>+234 808 171 3669</Text>
                <Text>+234 703 054 8190</Text>
                <Text>biorresourcesmanagement@gmail.com</Text>
              </Flex>
            </Flex>
          </Flex>

          {/* 2nd row flex */}
          <Flex
            gap={[2, 4, 10, 14]}
            direction={["column", "column", "row", "row"]}
          >
            <Flex direction="column" flexBasis={"25%"}>
              <Flex align={"center"} gap={2}>
                <Text>Follow us on</Text>
                <Box bgColor="white" height={"1px"} flexGrow={1} />
              </Flex>
              <Flex
                gap={2}
                sx={{
                  "& > a": {
                    bgColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 0,
                    "& svg": { fill: "brand.primary" },
                  },
                }}
              >
                <IconButton
                  icon={<TfiLinkedin />}
                  as={"a"}
                  href={"http://linkedin.com/in/bior-resources-management"}
                  target="_blank"
                />
                <IconButton
                  icon={<BsInstagram />}
                  as={"a"}
                  href={"http://instagram.com/biorresourcesmanagement"}
                  target="_blank"
                />
                <IconButton
                  icon={<BsFacebook />}
                  as={"a"}
                  href={
                    "https://www.facebook.com/biorResourcesLtd?mibextid=ZbWKwL"
                  }
                  target="_blank"
                />
                <IconButton
                  icon={<BsYoutube />}
                  as={"a"}
                  href={"http://youtube.com/@BiorResourcesManagement/featured"}
                  target="_blank"
                />
                <IconButton
                  icon={<BsWhatsapp />}
                  as={"a"}
                  href={"https://wa.me/message/JO7KSCBOGQWKP1"}
                  target="_blank"
                />
              </Flex>
            </Flex>

            <Text>
              <Text as="span" fontWeight={"700"}>
                Address:
              </Text>{" "}
              2, Joachim Moaghalu street Okokomaiko Lagos Nigeria
            </Text>
          </Flex>

          <Divider mt={8} />

          <Flex justify={"space-between"} wrap={"wrap"} gap={2}>
            <Text>
              &copy; 2023 Bior Resources Management Ltd. All rights reserved.
            </Text>
            <Text>Privacy Policy</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
