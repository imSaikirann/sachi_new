import { Box, Flex, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Spon from "./Spon";

export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Flex
   
        backgroundImage="bag_s.png"
        backgroundSize="cover"
        backgroundPosition="center"
        alignItems="center"
        direction="column"
       
        justifyContent="center"
        h={!isLargerThan800 ? "519px" : "519px"} // Adjusted height for responsiveness
        w={["60vh", "100vw"]} // Adjusted width for responsiveness
      >
        <Box>
          <Flex alignItems="center" justifyContent="center">
            <VStack spacing="0">
              <Text color="white" fontSize={["40px", "55.94px"]} fontFamily="Oswald">
                What’s in the
              </Text>
              <Text color="white" fontSize={["40px", "55.94px"]} fontFamily="Oswald">
                Bag For Sponsors?
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>

      <Box>
        <Spon />
      </Box>
    </>
  );
}
