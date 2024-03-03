import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      pb={["35px"]}
      bg="white"
      alignItems="center"
      direction={["row","column"]}
      
      justifyContent="center"
      h={!isLargerThan800 ? "auto" : "630px"}
      w={["100vw", "100vw"]}
    >
      <Box >
        
          <Box display="flex" flexDirection={["column-reverse","row"]} alignItems="center" justifyContent="center">
            <VStack fontFamily="Oswald" textAlign={["center","left"]}>
              <Box w="500px" >
                <Box>
                  <Text  fontSize={["24px","32px"]}>
                    Exciting Competitions on
                  </Text>
                  <Text  fontSize={["24px","32px"]}>
                    Day 1 and Day 2.
                  </Text>
                </Box>
                <Box mt="1rem">
                  <Text  fontSize={["14px","26px"]}>
                    The finals are scheduled for Sunday, March 10th.{" "}
                  </Text>
                  <Text  fontSize={["14px","26px"]}>
                    The prize distribution ceremony will be held in the{" "}
                  </Text>
                  <Text  fontSize={["14px","26px"]}>
                    evening following the Event’s conclusion.
                  </Text>
                </Box>
              </Box>
            </VStack>
            <VStack>
              <Image src="trophy.png" w={["250px","591px"]} h={["250px","591px"]}></Image>
            </VStack>
          </Box>
     
      </Box>
    </Flex>
  );
}
