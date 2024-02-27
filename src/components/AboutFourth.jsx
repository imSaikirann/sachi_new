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

export default function AboutFourth() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
     p="2rem"
      alignItems="center"
      direction="column"
      ml={["15px", "0"]}
      h={!isLargerThan800 ? "135.5vh" : "900px"}
      w={["90vw", "100vw"]}
      bg="#FCF3EE"
    >
      <Box ml="230px">
        <HStack>
          <Box>
            <VStack gap="2rem">
           <Box w="659px">
            <Text fontFamily="Oswald" fontSize="32px" fontWeight="600">Who Are We?</Text>
            <Text fontFamily="Oswald" fontSize="26px">As a Start-up and creative agency, the options are unrivaled and dedicated to providing the most comprehensive support with Top-tier services.</Text>
           </Box>
           <Box w="659px">
            <Text fontFamily="Oswald" fontSize="32px" fontWeight="600">Affordable & Adaptable: </Text>
            <Text fontFamily="Oswald" fontSize="26px">Our solutions cater to various needs, offering a range of cost-effective and customizable packages.</Text>
           </Box>
           <Box w="659px">
            <Text fontFamily="Oswald" fontSize="32px" fontWeight="600">Committed & Accountable:</Text>
            <Text fontFamily="Oswald" fontSize="26px">We take responsibility forevery client, ensuring their needs are efficiently and dutifully met. Our team is a blend of experienced mentors and innovative</Text>
           </Box>
           <Box w="659px">
            <Text fontFamily="Oswald" fontSize="32px" fontWeight="600">Skilled & Diverse:</Text>
            <Text fontFamily="Oswald" fontSize="26px">young talents, satisfying your demands with expertise and creativity.</Text>
           </Box>
           <Box w="659px">
            <Text fontFamily="Oswald" fontSize="32px" fontWeight="600">Punctual & Considerate:</Text>
            <Text fontFamily="Oswald" fontSize="26px">Wevalue your time. Your requirements are met promptly and thoughtfully,
precisely when you need them .</Text>
           </Box>
            </VStack>
          </Box>
          <Box>
            <Image src="croped_pic.png" />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}
