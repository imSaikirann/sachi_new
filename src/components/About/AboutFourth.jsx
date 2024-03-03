import { Box, Flex, HStack, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function AboutFourth() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      p="2rem"
      alignItems="center"
      direction="column"
    
      h="auto"
      w={["100vw", "100vw"]}
      bgColor="white"
   
    >
      <Box ml={isLargerThan800 ? "230px" : "0"}>
        <HStack>
          <Box fontFamily="Oswald" fontSize= {["12px","26px"]}>
            <VStack gap="2rem" w={isLargerThan800 ? "659px" : "100%"}>
              <Box w= {["300px","659px"]} >
                <Text  fontSize={["16px","32px"]} fontWeight="600">
                  Who Are We?
                </Text>
                <Text  >
                  As a Start-up and creative agency, the options are unrivaled and dedicated to providing the most comprehensive support with Top-tier services.
                </Text>
              </Box>
              <Box w= {["300px","659px"]}>
                <Text  fontSize={["16px","32px"]} fontWeight="600">
                  Affordable & Adaptable:
                </Text>
                <Text  >
                  Our solutions cater to various needs, offering a range of cost-effective and customizable packages.
                </Text>
              </Box>
              <Box w= {["300px","659px"]}>
                <Text  fontSize={["16px","32px"]} fontWeight="600">
                  Committed & Accountable:
                </Text>
                <Text  >
                  We take responsibility for every client, ensuring their needs are efficiently and dutifully met. Our team is a blend of experienced mentors and innovative young talents, satisfying your demands with expertise and creativity.
                </Text>
              </Box>
              <Box w= {["300px","659px"]}>
                <Text  fontSize={["16px","32px"]} fontWeight="600">
                  Skilled & Diverse:
                </Text>
                <Text  >
                  We value your time. Your requirements are met promptly and thoughtfully, precisely when you need them.
                </Text>
              </Box>
              <Box w= {["300px","659px"]}>
                <Text  fontSize={["16px","32px"]} fontWeight="600">
                  Punctual & Considerate:
                </Text>
                <Text  >
                  We value your time. Your requirements are met promptly and thoughtfully, precisely when you need them.
                </Text>
              </Box>
             
            </VStack>
          </Box>

          <Box >
          {isLargerThan800 ? (
             <Image
             src="croped_picr.png"
             w={isLargerThan800 ? "100%" : "470px"}
             h={isLargerThan800 ? "auto" : "548px"}
           
           />
          ):
         ""
          }
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}
