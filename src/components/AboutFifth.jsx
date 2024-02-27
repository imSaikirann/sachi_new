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
      ml={["15px", "0"]}
      h={!isLargerThan800 ? "135.5vh" : "314px"}
      w={["90vw", "100vw"]}
      bg="#FFA800"
    >
      <Box ml="260px">
      <Text fontSize="32px" fontFamily="Oswald" fontWeight="600">Theme of Women’s Day 2024: </Text>
      <Text fontSize="32px" fontFamily="Oswald" fontWeight="600">Inspire Inclusion </Text>
      <Text fontSize="26px" fontFamily="Oswald" >Imagine a world without bias, where diversity is treasured. </Text>
      <Text fontSize="26px" fontFamily="Oswald" >Let us welcome a global community that celebrates differences, fostering equity. </Text>
      </Box>
    </Flex>
  );
}
