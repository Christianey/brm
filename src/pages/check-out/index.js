import {
  Box,
  Circle,
  Divider,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import React from "react";

const CartItem = () => {
  return (
    <Flex>
      <Flex
        border={"0.5px solid #000"}
        boxSize={"6.375rem"}
        p={4}
        justify={"center"}
        align={"center"}
      >
        <Image src="/product1.png" />
      </Flex>

      <Flex direction={"column"} gap={2} px={4}>
        <Text fontSize={"1.25rem"} fontWeight={"500"}>
          Grapes (Pinot Noir)
        </Text>
        <Flex justify={"space-between"} fontSize={".625rem"}>
          <Text color="#777">Size 2 Bunches</Text>
          <Text>Color Purple</Text>
        </Flex>
        <Text mt="auto" fontWeight={"500"}>
          NGN1, 000 x 02
        </Text>
      </Flex>
    </Flex>
  );
};

export default function CheckOut() {
  return (
    <Box mx={"auto"} maxW={["100%", "100%", "80%", "65%"]}>
      <Box>
        <Text fontWeight={"700"} fontSize={"45px"}>
          Shopping Cart
        </Text>
        <Text
          fontSize={"0.9rem"}
          fontWeight={"400"}
          color={"#777777"}
          maxW={"24rem"}
          mb={4}
        >
          To purchase product (s) you must fill in the data fields. Please fill
          them carefully. Thank you
        </Text>
      </Box>

      <Flex
        sx={{ "& button, input, textarea": { borderRadius: 0 } }}
        wrap={"wrap"}
      >
        <Flex
          flexGrow={1}
          gap={6}
          align={"center"}
          sx={{ "& button, input, textarea": { borderRadius: 0 } }}
          flexBasis={["100%", "100%", "68%", "58%"]}
          px={"2%"}
        >
          <Flex direction={"column"} gap={4} flexGrow={1}>
            <Divider />

            <Text fontWeight={"500"} fontSize={"1.875rem"}>
              Billing Details
            </Text>

            <Flex
              sx={{
                "& > div": { flexBasis: ["100%", "100%", "100%", "48%"] },
                "& ~ div": { mb: 1 },
              }}
              wrap={"wrap"}
              gap={[4, 4, 4, "2%"]}
              justify={"space-between"}
            >
              <Box>
                <FormLabel mx={0}>First Name</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel mx={0}>Last Name</FormLabel>
                <Input />
              </Box>
            </Flex>

            <Flex
              sx={{ "& > div": { flexBasis: ["100%", "100%", "100%", "48%"] } }}
              wrap={"wrap"}
              gap={[4, 4, 4, "2%"]}
              justify={"space-between"}
            >
              <Box>
                <FormLabel mx={0}>Email Address</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel mx={0}>Phone Number</FormLabel>
                <Input />
              </Box>
            </Flex>
            <Box>
              <FormLabel mx={0}>Country</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel mx={0}>State</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel mx={0}>City</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel mx={0}>Address</FormLabel>
              <Input />
            </Box>

            <Flex
              sx={{ "& > div": { flexBasis: ["100%", "100%", "100%", "48%"] } }}
              wrap={"wrap"}
              gap={[4, 4, 4, "2%"]}
              justify={"space-between"}
            >
              <Box>
                <FormLabel mx={0}>Postal Code</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel mx={0}>Company Name</FormLabel>
                <Input />
              </Box>
            </Flex>
            <Box>
              <Flex
                gap={2}
                align={"center"}
                border={"0.5px solid #000"}
                p={".5rem"}
                bgColor={"#F3F4F5"}
              >
                <Circle size={"0.8rem"} bgColor={"black"} />
                <Text fontSize={"0.94ren"}>PAYMENT METHOD</Text>
              </Flex>
              <Flex gap={2} align={"center"} p={".5rem"}>
                <Circle size={"0.8rem"} bgColor={"black"} />
                <Flex
                  border={"1px solid #000"}
                  borderRadius={"14px"}
                  gap={2}
                  boxSize={"2rem"}
                  justify={"center"}
                  align={"center"}
                >
                  <FaRegCreditCard />
                </Flex>
                <Text fontSize={"0.94ren"}>Debit/Credit Card</Text>
              </Flex>

              <Box pl={"2rem"}>
                <Box>
                  <FormLabel mx={0}>Enter Card Number</FormLabel>
                  <Input />
                </Box>

                <Flex
                  sx={{
                    "& > div": { flexBasis: ["100%", "100%", "100%", "48%"] },
                  }}
                  wrap={"wrap"}
                  gap={[4, 4, 4, "2%"]}
                  justify={"space-between"}
                >
                  <Box>
                    <FormLabel mx={0}>Valid Date</FormLabel>
                    <Input />
                  </Box>
                  <Box>
                    <FormLabel mx={0}>CVV</FormLabel>
                    <Input />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Flex
          direction={"column"}
          border={"1px solid #D9D9D9"}
          p={4}
          borderRadius={"10px"}
          gap={2}
          flexBasis={["98%", "98%", "40%", "40%"]}
          grow={1}
          mt={[4, 4, 4, 0]}
          mx={[4, 4, 4, 0]}
        >
          <Text fontWeight={"500"} fontSize={"1.875rem"}>
            Your Order
          </Text>

          <Divider my={6} />

          <CartItem />
          <CartItem />
          <CartItem />

          <Divider my={10} mt="auto" />

          <Flex
            fontSize={"0.9375rem"}
            align={"center"}
            justify={"space-between"}
            mb={4}
          >
            <Text>Delivery</Text>
            <Text>NGN500 (Express) </Text>
          </Flex>
          <Flex
            fontSize={"0.9375rem"}
            align={"center"}
            justify={"space-between"}
          >
            <Text>Disount</Text>
            <Text>NGN -50 </Text>
          </Flex>
          <Flex
            align="center"
            justify={"space-between"}
            fontSize={"1.875rem"}
            fontWeight={"500"}
            border={"0.5px solid #000"}
            bg={"#F8F8F8"}
            borderRadius={"8px"}
            py={4}
            px={2}
          >
            <Text>Total</Text>
            <Text>NGN2450.00</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
