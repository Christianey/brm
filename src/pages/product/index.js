import {
  Box,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
export default function ProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  return (
    <>
      <Flex
        color="brand.primary"
        cursor={"pointer"}
        onClick={router.back}
        align={"center"}
        gap={2}
        px={[1, 2, 4, 10]}
      >
        <MdOutlineArrowBackIosNew />
        <Text>Back to Products</Text>
      </Flex>

      <Box px={[1, 2, 4, 10]} maxW={"1000px"} mx="auto">
        <Flex wrap={"wrap"} justify={"center"} w="full" mb={4}>
          <Flex
            direction={"column"}
            flexBasis={["100%", "100%", "100%", "50%"]}
            px={2}
          >
            <Flex justify={"center"} align={"center"}>
              <Image src={image} alt="Product Image" />
            </Flex>
            <Flex
              sx={{
                "& > div": {
                  width: "5.7rem",
                  border: "1px solid rgba(119, 119, 119, 0.5)",
                  borderRadius: "md",
                  p: 3,
                },
              }}
              justify={"center"}
              gap={2}
            >
              <Box>
                <Image src={image} />
              </Box>
              <Box>
                <Image src={image} />
              </Box>
              <Box>
                <Image src={image} />
              </Box>
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            flexBasis={["100%", "100%", "100%", "50%"]}
            py={4}
            p={2}
          >
            <Text
              color={"brand.primary"}
              fontSize={"1.25rem"}
              fontWeight={"500"}
              mb={6}
            >
              {name}
            </Text>

            <Text color={"#77777780"} fontSize={"1.25rem"} fontWeight={"500"}>
              Product Caption
            </Text>
            <Text fontSize={"1.25rem"} fontWeight={"400"} mb={4}>
              {description}
            </Text>
            <Text
              fontSize={".7rem"}
              color={"#777777"}
              sx={{ "& span": { color: "brand.primary" } }}
            >
              Make sure you have read{" "}
              <span>the detailed information below</span> before placing an
              order.
            </Text>
          </Flex>
        </Flex>

        <Text
          color={"brand.primary"}
          fontSize={"1.25rem"}
          fontWeight={"600"}
          my={3}
          px={2}
        >
          Detailed Information:
        </Text>

        <TableContainer px={2}>
          <Table
            size="sm"
            variant={"simple"}
            sx={{ "& th, td": { border: "1px solid black" } }}
          >
            <Thead>
              <Tr display={["none", "table-row", "table-row", "table-row"]}>
                <Th colSpan={2}>DESCRIPTION</Th>
                <Th colSpan={2}>ORIGIN</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr display={["none", "table-row", "table-row", "table-row"]}>
                <Td colSpan={2}>{name}</Td>
                <Td>Country</Td>
                <Td>Nigeria</Td>
              </Tr>
              <Tr display={["none", "table-row", "table-row", "table-row"]}>
                <Td>Protein % min</Td>
                <Td>46-48</Td>
                <Td>State</Td>
                <Td>Ondo</Td>
              </Tr>
              <Tr>
                <Td>Moisture %max</Td>
                <Td>12</Td>
              </Tr>
              <Tr>
                <Td>Acid ins Ash % max</Td>
                <Td>2-2.5</Td>
              </Tr>
              <Tr>
                <Td>Total Ash %m max</Td>
                <Td>7</Td>
              </Tr>
              <Tr>
                <Td>Fiber %max</Td>
                <Td>6-6.5</Td>
              </Tr>
              <Tr>
                <Td>Fat % max</Td>
                <Td>12</Td>
              </Tr>
              <Tr>
                <Td>Koh sol. % min</Td>
                <Td>78</Td>
              </Tr>
              <Tr>
                <Td>Urease act. Mg. N/G</Td>
                <Td>0.02 - 0.3</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
