import {
  Box,
  Flex,
  Text,

  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function Map() {
  return (
    <Flex direction="column">
      <Box w="100vw" h={["100vh", "1500px"]} bg="white" overflowX="hidden">
        <Flex
          flexDirection="column"
          ml="240px"
         
        >
          <Box mt="4rem">
            <Image src="map.png" h="570px" w="1170px" />
          </Box>
          <Box>
            <HStack >
              <VStack alignItems="flex-start">
                <HStack mb="4rem">
                  <Box mb="4rem" mr="3rem">
                    <Text fontFamily="Oswald" fontSize="18px" fontWeight="600">
                      Address
                    </Text>
                  </Box>

                  <Box w="356px" h="96.8px">
                    <Text fontFamily="Oswald" fontSize="18px" fontWeight="600">
                      Wings convention centre
                    </Text>
                    <Text fontFamily="Oswald" fontSize="18px">
                      St.George’s school, New Bupathy Nagar, Shenoy Nagar,{" "}
                    </Text>
                    <Text fontFamily="Oswald" fontSize="18px">
                      Ponnamalli high road, opp pachayapa college, Chennai,{" "}
                    </Text>
                    <Text fontFamily="Oswald" fontSize="18px">
                      Tamil Nadu 600030{" "}
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start" mb="4rem">
                  <Box mr="2rem">
                    <Text fontFamily="Oswald" fontSize="18px" fontWeight="600">
                      Telephone
                    </Text>
                  </Box>

                  <Box w="356px">
                    <Text fontFamily="Oswald" fontSize="18px">
                      +91 79049 24560
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box mr="2rem"  mb="4rem">
                    <Text fontFamily="Oswald" fontSize="18px" fontWeight="600">
                      E-mail
                    </Text>
                  </Box>

                  <Box w="356px" pl="1.5rem">
                    <Text fontFamily="Oswald" fontSize="18px">
                      sachieventsmarketing@gmail.com
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box>
                    <Text fontFamily="Oswald" fontSize="18px" fontWeight="600">
                      Official Site
                    </Text>
                  </Box>

                  <Box w="356px">
                    <a href="https://sachievents.com/">
                      <Text fontFamily="Oswald" fontSize="18px" pl="1.4rem">
                        www.sachievents.com
                      </Text>
                    </a>
                  </Box>
                </HStack>
              </VStack>

              <Box>
                <Image src="location.png" h="803px" w="990x" />
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
