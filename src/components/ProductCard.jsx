import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdStar } from "react-icons/md";

export default function ProductCard({
  bgColor = "rgba(31, 30, 36, 0.10)",
  image,
  description,
  name,
}) {
  const router = useRouter();

  return (
    <Flex
      direction={"column"}
      p={2}
      flexBasis={["100%", "50%", "50%", "33.33333%"]}
      onClick={(e) => {
        router.push("/product");
      }}
      cursor={"pointer"}
    >
      <Flex
        bgColor={bgColor}
        h={"290px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={image} alt="Product Image" />
      </Flex>
      <Text fontWeight={"600"} my={2}>{name}</Text>

      <Text fontSize={"sm"} color={"#777777"} mb={3}>
        {description}
      </Text>

      <Flex justify={"space-between"}  mt={"auto"}>
        <Flex>
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </Flex>

        <Text color="brand.primary">NGN500</Text>
      </Flex>

      <Flex
        gap={2}
        sx={{
          "& button": {
            flexGrow: 1,
            bgColor: "transparent",
            borderWidth: "1px",
            borderRadius: "none",
          },
        }}
        
      >
        <Button
          borderColor={"brand.primary"}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push("/check-out");
          }}
        >
          Buy Now
        </Button>
        <Button borderColor={"brand.secondary"}>Add to Cart</Button>
      </Flex>
    </Flex>
  );
}
