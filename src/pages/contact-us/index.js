import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
  return (
    <Flex
      mx={"auto"}
      maxW={"80%"}
      gap={6}
      justify={"center"}
      align={"center"}
      sx={{ "& button, input, textarea": { borderRadius: 0 } }}
    >
      <Flex direction={"column"} gap={4}>
        <Box>
          <Text fontWeight={"700"} fontSize={"2.8rem"}>
            Get In Touch
          </Text>
          <Text fontSize={"20px"} fontWeight={"400"}>
            Our friendly team would love to hear from you!
          </Text>
        </Box>

        <Flex
          sx={{ "& > div": { flexBasis: ["100%", "100%", "100%", "48%"] } }}
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

        <Box>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </Box>

        <Box>
          <FormLabel>Phone Number</FormLabel>
          <Input type="number" />
        </Box>

        <Box>
          <FormLabel>Message</FormLabel>
          <Textarea resize="none" size={"lg"} rows={10} />
        </Box>

        <Checkbox color={"#777777"}>
          <Text fontSize={"14px"}>
            You agree to our friendly Privacy Policy
          </Text>
        </Checkbox>

        <Button bgColor={"brand.secondary"} color="white">
          Send Message
        </Button>
      </Flex>
      <Image
        src={"/ContactUsImage.jpg"}
        display={["none", "none", "none", "block"]}
        alt="Contact Us Image"
      />
    </Flex>
  );
}
