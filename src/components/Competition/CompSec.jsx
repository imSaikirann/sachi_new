import React from "react";
import { Box, Flex, Image, Text, VStack, Heading } from "@chakra-ui/react";

export default function CompSec() {
  return (
    <>
      <Flex direction="column">
        <Box w="100vw" h={["1400px", "1200px"]} bg="white">
          <Flex
            w="100vw"
            h="64vh"
            ml={["10px", "240px"]}
            flexDirection="column"
            mr={["10px", "240px"]}
           
            gap="3rem"
          
          >
            <Box fontSize={["16px"]} ml="30px">
              <Text fontSize={["", "32px"]} fontFamily="oswald">
                Exciting Competitions on Day 1 and Day 2
              </Text>
              <Text fontSize={["", "26px"]} fontFamily="oswald">
                The finals are scheduled for Sunday, March 10th. The prize
                distribution ceremony will be held in
              </Text>
              <Text fontSize={["", "26px"]} fontFamily="oswald">
                the evening following the Event’s conclusion.
              </Text>
            </Box>

            <Box>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                m="2rem"
              >
                <Heading
                  fontSize={{ base: "2rem", md: "2.6rem" }}
                  fontFamily="Poppins, sans-serif"
                  fontWeight="600"
                >
                  Age Group
                </Heading>
                <Text m="8px" ml="0px" fontSize="1.3rem">
                  This event welcomes women of all ages, divided into three
                  groups:
                </Text>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                  mt="1rem"
                  flexWrap="wrap"
                  gap="1.4rem"
                  w={["90vw", "50vw"]}
                  m="auto"
                >
                  {/* Card 1 */}
                  <Box
                    p="1rem"
                    mx={["20px", ""]}
                    ml={["-2px", ""]}
                    bg="white"
                    borderRadius="12px"
                    mt="18px"
                    boxShadow="md"
                  >
                    <VStack align="center" mb={{ base: "1rem", md: "0" }}>
                      <Image
                        src="card1.png"
                        alt="Age Group 1"
                        p="1rem"
                        objectFit="contain"
                        borderRadius="full"
                        boxShadow="md"
                      />
                      <Text mt="4px" fontSize="1rem" fontWeight="600">
                        {" "}
                        Teen Dreamers{" "}
                      </Text>
                      <Text>(Under 20)</Text>
                    </VStack>
                  </Box>

                  {/* Card 2 */}
                  <Box
                    p="1rem"
                    mx={["20px", ""]}
                    ml={["-2px", ""]}
                    bg="white"
                    borderRadius="12px"
                    mt="18px"
                    boxShadow="md"
                  >
                    <VStack align="center" mb={{ base: "1rem", md: "0" }}>
                      <Image
                        src="card2.png"
                        alt="Age Group 2"
                        p="1rem"
                        objectFit="contain"
                        borderRadius="full"
                        boxShadow="md"
                      />
                      <Text mt="4px" fontSize="1rem" fontWeight="600">
                        {" "}
                        Rising Stars{" "}
                      </Text>
                      <Text>(20-30)</Text>
                    </VStack>
                  </Box>

                  {/* Card 3 */}
                  <Box
                    p="1rem"
                    mx={["20px", ""]}
                    ml={["-2px", ""]}
                    bg="white"
                    borderRadius="12px"
                    mt="18px"
                    boxShadow="md"
                  >
                    <VStack align="center">
                      <Image
                        src="card3.png"
                        alt="Age Group 3"
                        p="1rem"
                        objectFit="contain"
                        borderRadius="full"
                        boxShadow="md"
                      />
                      <Text mt="4px" fontSize="1rem" fontWeight="600">
                        {" "}
                        Seasoned{" "}
                      </Text>
                      <Text>Leaders (30+)</Text>
                    </VStack>
                  </Box>
                </Flex>

                <Text m="1rem" ml="0px" fontSize="1.3rem">
                  No matter your age, there’s always something new to discover.
                </Text>

               

               
              </Flex>
            </Box>

            <Box>
              <Text fontSize={["", "32px"]} fontFamily="oswald">
                Competitions and Timings
              </Text>

              <Image src="table.png" w="1100px" mt="1rem"></Image>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
