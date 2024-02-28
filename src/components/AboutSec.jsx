import {
  Box,
  Flex,

  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";


export default function AboutSec() {
  return (
    <Flex w="100vw" direction="column" color="black" bg="white" h={["1300px"]}>
      <Box ml="240px" mr="240px" mt="3rem">
        <Box>
          <Flex>
            <Box>
              <VStack>
                <VStack alignItems="flex-start" w="655px" >
                  <Text fontFamily="Oswald" fontSize="32px" fontWeight="500">
                    About Sachi Events
                  </Text>
                  <Text fontFamily="Oswald" fontSize="26px" >
                  Turn your dream events into a reality with Sachi. Whether you envision an indoor or outdoor celebration, we bring your vision to life, allowing you to relax and savour the occasion.
                  </Text>
                </VStack>
                <VStack alignItems="flex-start" w="655px" mt="1.4rem"> 
                  <Text fontFamily="Oswald" fontSize="32px" fontWeight="500">
                  Our Vission :
                  </Text>
                  <Text fontFamily="Oswald" fontSize="26px" >
                  To redefine the industry by architecting captivating events that inspire.
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <Box h="462px" w="665px" >
              <Image src="target.png" />
            </Box>
          </Flex>

          <Flex>
          <Box >
              <Image src="rocket.png" />
            </Box>
            <Box>
              <VStack >
                <VStack alignItems="flex-start" w="655px" mt="10rem">
                  <Text fontFamily="Oswald" fontSize="32px" fontWeight="500">
                  Our Mission: 
                  </Text>
                  <Text fontFamily="Oswald" fontSize="26px" >
                  To foster positive change in society through exceptional events.
                  </Text>
                </VStack>
              
              </VStack>
            </Box>
           
          </Flex>

          <Flex>
          
            <Box>
              <VStack>
                <VStack alignItems="flex-start" w="655px" mt="10rem">
                  <Text fontFamily="Oswald" fontSize="32px" fontWeight="500">
                  Our Mission: 
                  </Text>
                  <Text fontFamily="Oswald" fontSize="26px" >
                  To foster positive change in society through exceptional events.
                  </Text>
                </VStack>
              
              </VStack>
            </Box>
            <Box h="462px" w="665px">
              <Image src="arrows.png" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
