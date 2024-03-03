import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  useMediaQuery,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function CompSponsor() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const sponsorData = [
    { imageSrc: "sp1.png", text: "Rollup Standee " },
    { imageSrc: "sp2.png", text: "Selfie Spot" },
    { imageSrc: "sp3.png", text: "Jingles" },
    { imageSrc: "sp4.png", text: "Stall & Kiosk" },
    { imageSrc: "sp5.png", text: "60 Sec Promotional Videos" },
    { imageSrc: "sp6.png", text: "Youtube Promotions" },
     
   
  ];

  const AdsData = [
    { imageSrc: "ad1.png", text: " Bus ads " },
    { imageSrc: "ad2.png", text: "Pole kiosk" },
    { imageSrc: "ad3.png", text: "Mobile billboard " },
    { imageSrc: "ad4.png", text: "hoarding " },
    { imageSrc: "ad5.png", text: "leaflets " },
    { imageSrc: "ad6.png", text: "Paper ad or insertions " },
    { imageSrc: "ad7.png", text: "College notice board " },

 
     
   
  ];
  return (
    <Flex
    p={{ base: "1rem", md: "2rem" }}
    alignItems="center"
    direction="column"
    ml={["0", "0"]}
    h={!isLargerThan800 ? "auto" : "1200px"}
    w={["100vw", "100vw"]}
    bg="#FCF3EE"
  >
    <VStack spacing={{ base: "4", md: "8" }} mt="1rem"  ml={["0px","200px"]}  mr={["0px","200px"]} >
      <HStack spacing={{ base: "4", md: "8" }} flexWrap="wrap" justify="center">
        {sponsorData.map((sponsor, index) => (
          <Box key={index} textAlign="center" fontFamily="Oswald" fontSize={{ base: "18px", md: "26px" }} mb="4">
            <Image src={sponsor.imageSrc} w={{ base: "180px", md: "286px" }} h={{ base: "102px", md: "162px" }} />
            <Text mt="8px">{sponsor.text}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  
    <Box mt={{ base: "1rem", md: "2rem" }}>
      <Text fontFamily="Oswald" fontSize={{ base: "35px", md: "55px" }}>
        Outdoor Advertising
      </Text>
    </Box>
  
    <VStack spacing={{ base: "4", md: "8" }} mt="1rem">
      <HStack spacing={{ base: "4", md: "8" }} flexWrap="wrap" justify="center">
        {AdsData.map((sponsor, index) => (
          <Box key={index} textAlign="center" fontFamily="Oswald" fontSize={{ base: "18px", md: "26px" }} mb="4">
            <Image src={sponsor.imageSrc} w={{ base: "180px", md: "286px" }} h={{ base: "102px", md: "162px" }} />
            <Text mt="8px">{sponsor.text}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  </Flex>
  
  );
}
