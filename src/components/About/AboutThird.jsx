import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      pb={["20px", "35px"]} // Adjusted padding for better spacing on smaller screens
      backgroundImage="audience-conference-hall.png"
      backgroundSize="cover"
      backgroundPosition="center"
      alignItems="center"
      direction="column"
     
      justifyContent="center"
      h={!isLargerThan800 ? "519px" : "519px"} 
      w={["100vw", "100vw"]}
    >
      <Box textAlign="center">
        <Text color="white" fontSize={["20px", "28.62px"]} fontFamily="Oswald">
          For us, events are not just moments; they are opportunities for transformation.
        </Text>
        <Text color="white" fontSize={["20px", "28.62px"]} fontFamily="Oswald">
          We believe in the power of gatherings to inspire, educate, and connect people.
        </Text>
        <Text color="white" fontSize={["20px", "28.62px"]} fontFamily="Oswald" mt={["1rem", "2rem"]}>
          Join us in creating significant memories.
        </Text>
      </Box>
    </Flex>
  );
}
