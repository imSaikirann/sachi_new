import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutColleb() {
  return (
    <Flex
      w="100%"
      direction="column"
      color="black"
      bg="white"
      h={["auto", "500px"]} 
    
    >
      <Box w={["100%", "70%"]} ml={["0", "5%", "230px"]} px={["14px","28px "]}  >
        <Flex alignItems="center" justifyContent="space-between" direction={["column-reverse", "row"]}>
          <HStack mb={["2rem", "0"]}> {/* Added margin-bottom for better spacing on smaller screens */}
            <Box
              w={["100%", "35vw"]}
              fontSize={["15px", "26px"]}
              fontFamily="Oswald"
            >
              <Text mt="40px" textAlign={["justify", ""]}>
                Street Bazaar is a platform that helps people find stores near
                them.
              </Text>
              <Text textAlign={["justify", ""]}>
                We use location-based services to show users a list of
                businesses in their area and allow them to search for specific
                products or services.
              </Text>
              <Text textAlign={["justify", ""]}>
                Shopping made easy with Street Bazaar.
              </Text>
              <Text textAlign={["justify", ""]} mt="1rem" fontWeight="700">
                Get ready to celebrate, shop at this Women's Day.
              </Text>
              <Text textAlign={["justify", ""]} mt="1rem">
                A unique collaboration of Sachi Events' phenomenal expertise &
                Street Bazaar's vibrant marketplace.
              </Text>
            </Box>
          </HStack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={["2rem", "0"]} // Added margin-top for better spacing on smaller screens
          >
            <Image src="street.png" w={["100%", "300px"]} h="300px" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
