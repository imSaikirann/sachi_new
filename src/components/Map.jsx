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
 
      <Box w="100vw" h={["1000px", "1250px"]} bg="white" overflowX="hidden">
        <Flex
          flexDirection={["column","column"]}
          ml={["14px","240px"]}
          mr={["14px","240px"]}
          
         
        >
          <Box mt={["1rem","4rem"]}>
            <Image src="map.png" h={["200px","570px"]} w={["600px","1170px"]} />
          </Box>
          <Box fontSize={["12px","18px"]} display="flex" flexDirection={["column","row"]} mt="2rem">
        
             <Box>
             <VStack alignItems="flex-start" mb={["-1rem","4rem"]}>
                <HStack mb={["1rem","4rem"]}  >
                  <Box mb={["4rem","4rem"]} mr="3rem">
                    <Text fontFamily="Oswald"  fontWeight="600">
                      Address
                    </Text>
                  </Box>

                  <Box w="356px" h="96.8px">
                    <Text fontFamily="Oswald"  fontWeight="600">
                      Wings convention centre
                    </Text>
                    <Text fontFamily="Oswald" >
                      St.George’s school, New Bupathy Nagar, Shenoy Nagar,{" "}
                    </Text>
                    <Text fontFamily="Oswald" >
                      Ponnamalli high road, opp pachayapa college, Chennai,{" "}
                    </Text>
                    <Text fontFamily="Oswald" >
                      Tamil Nadu 600030{" "}
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start" mb={["1rem","4rem"]}>
                  <Box mr="2rem">
                    <Text fontFamily="Oswald"  fontWeight="600">
                      Telephone
                    </Text>
                  </Box>

                  <Box w="356px">
                    <Text fontFamily="Oswald" >
                      +91 79049 24560
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box mr={["1rem","2rem"]}  mb={["1rem","4rem"]}>
                    <Text fontFamily="Oswald"  fontWeight="600">
                      Email
                    </Text>
                  </Box>

                  <Box w="356px" pl="1.5rem">
                    <Text fontFamily="Oswald" >
                      sachieventsmarketing@gmail.com
                    </Text>
                  </Box>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box>
                    <Text fontFamily="Oswald"  fontWeight="600">
                      Official Site
                    </Text>
                  </Box>

                  <Box w="356px">
                    <a href="https://sachievents.com/">
                      <Text fontFamily="Oswald"  pl="1.4rem">
                        www.sachievents.com
                      </Text>
                    </a>
                  </Box>
                </HStack>
              </VStack>

             </Box>

              <Box>
                <Image src="location.png" />
              </Box>
            
   
            
          </Box>
        </Flex>
      </Box>
  
  );
}
