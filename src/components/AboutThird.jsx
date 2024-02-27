import {
    Box,
    Circle,
    Flex,
    Heading,
    Text,
    useMediaQuery,
  } from "@chakra-ui/react";
  import React from "react";

  export default function AboutUs() {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    return (
      <Flex
        pb={["35px"]}
     
       backgroundImage= "audience-conference-hall.png"
       backgroundSize="cover"
       backgroundPosition="center"
        alignItems="center"
        direction="column"
        ml={["15px", "0"]}
       justifyContent="center"
        h={!isLargerThan800 ? "135.5vh" : "519px"}
        w={["90vw", "100vw"]}
      
      >
        <Box>
        <Text color="white" fontSize="28.62px" fontFamily="Oswald">
        For us, events are not just moments; they are opportunities for transformation.
        </Text>
        <Text color="white" fontSize="28.62px" fontFamily="Oswald">
        We believe in the power of gatherings to inspire, educate, and connect people.
        </Text>
       <Flex alignItems="center" justifyContent="center" mt="1rem">
       <Text color="white" fontSize="28.62px" fontFamily="Oswald">
        Join us in creating significant memories.
        </Text>
       </Flex>
      
        </Box>
     
      </Flex>
    );
  }
  