import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function News() {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      mx={[1, 2, 20, 48]}
      py={16}
    >
      <Text
        alignSelf={"center"}
        color={"brand.primary"}
        fontSize={"2rem"}
        fontWeight={"600"}
      >
        News
      </Text>

      <Text align={"center"}>
        By subscribing to our news alerts, you may be informed and up to date
        our most <br /> recent information&apos;s about available offers, goods and
        services from our <br /> news update.
      </Text>

      <Flex gap={4} direction={["column", "column", "row", "row"]}>
        <Input borderRadius={0} />
        <Button color="white" bgColor={"brand.primary"} borderRadius={"none"} alignSelf={"center"}>
          Subscribe
        </Button>
      </Flex>
    </Flex>
  );
}
