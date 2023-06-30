import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function ProfileImage({ src }) {
  return (
    <Box px={4} my={3}>
      <Flex
        py={4}
        px={6}
        direction={"column"}
        align={"center"}
        bgColor={"#FF915B14"}
      >
        <Image src={src} mb={3} alt="Team members Image" />
        <Text fontSize={"25px"} fontWeight={"600"}>
          Robinson Ebenezer
        </Text>
        <Text>(Operations/Sales Manager and Ceo)</Text>
      </Flex>
    </Box>
  );
}

export default function MeetOurTeam() {
  return (
    <Box my={10} maxW={"80%"} mx="auto">
      <Text
        fontWeight={"600"}
        fontSize={"4rem"}
        lineHeight={1}
        color={"brand.primary"}
      >
        Meet Our Team
      </Text>
      <Text>
        We succeed in our excellence as a team, meet our passionate team, who
        are dedicated to your success.
      </Text>
      <Divider />
      <Flex
        wrap={"wrap"}
        maxW={"1000px"}
        justify={"center"}
        mx={"auto"}
        sx={{
          "& > div": {
            maxW: ["100%", "100%", "50%", "33.3333%"],
          },
        }}
      >
        <ProfileImage src={"/team1.jpg"} />
        <ProfileImage src={"/team2.jpg"} />
        <ProfileImage src={"/team3.jpg"} />
      </Flex>
      <Divider />
    </Box>
  );
}
