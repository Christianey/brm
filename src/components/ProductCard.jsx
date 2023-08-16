import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "@/features/cartSlice";
import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard({
  id,
  price,
  bgColor = "rgba(31, 30, 36, 0.10)",
  image,
  description,
  name,
}) {
  const [addedToCart, setAddedToCart] = useState(false);
  const item = useSelector((state) => selectCartItemsWithId(state, id));
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Flex
      direction={"column"}
      p={2}
      flexBasis={["100%", "50%", "50%", "33.33333%"]}
      as={Link}
      href={{ pathname: "product", query: { image, description, name } }}
    >
      <Flex
        bgColor={bgColor}
        h={"290px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={image} alt="Product Image" />
      </Flex>
      <Text fontWeight={"600"} my={2}>
        {name}
      </Text>

      <Text fontSize={"sm"} color={"#777777"} mb={3}>
        {description}
      </Text>

      <Flex justify={"space-between"} mt={"auto"}>
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
        {addedToCart && item.length > 0 ? (
          <Flex
            // justify={"space-between"}
            alignItems={"stretch"}
            flexGrow={1}
            flexBasis={"50%"}
          >
            <IconButton
              sx={{ "& > svg": { fill: "brand.secondary" } }}
              border={"none"}
              size={"2.5rem"}
              bg="red"
              h="100%"
              icon={<AiFillMinusSquare size={"2rem"} />}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                dispatch(removeFromCart(id));
              }}
            />
            <Text alignSelf={"center"}>{item.length}</Text>
            <IconButton
              sx={{ "& > svg": { fill: "brand.secondary" } }}
              border={"none"}
              bg="red"
              h="100%"
              w="3rem"
              icon={<AiFillPlusSquare size={"2rem"} />}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                dispatch(addToCart({ id, image, description, name, price }));
              }}
            />
          </Flex>
        ) : (
          <Button
            borderColor={"brand.secondary"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(addToCart({ id, image, description, name, price }));
              setAddedToCart(true);
            }}
          >
            Add to Cart
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
