import {
  Box,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export default function AboutFourth() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      justifyContent="center"
      alignItems="left"
      direction="column"
      
      h={!isLargerThan800 ? "auto" : "314px"} 
      w={["100vw", "100vw"]}
      bg="#FFA800"
      p={["2rem", "0rem"]} 
    >
      <Box ml={!isLargerThan800 ? "0" : "260px"}> {/* Adjusted margin for smaller screens */}
        <Text fontSize={["20px", "32px"]} fontFamily="Oswald" fontWeight="600">
          Theme of Women’s Day 2024:
        </Text>
        <Text fontSize={["20px", "32px"]} fontFamily="Oswald" fontWeight="600">
          Inspire Inclusion
        </Text>
        <Text fontSize={["16px", "26px"]} fontFamily="Oswald">
          Imagine a world without bias, where diversity is treasured.
        </Text>
        <Text fontSize={["16px", "26px"]} fontFamily="Oswald">
          Let us welcome a global community that celebrates differences, fostering equity.
        </Text>
      </Box>
    </Flex>
  );
}
