import { Box, Flex,Heading } from "@chakra-ui/react";
import Map from "./Map"

export default function Contactus() {
  return (
    <Flex
    direction={["column","column"]}
    align="center"
    // justify="center"
    minHeight="100vh"
    bg="white"
  >
    <Flex
      w="100vw"
      h={["302px", "572px"]}
      backgroundImage="contactus.png"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      overflowX="hidden"
      pl={["10px", "280px"]}
      alignItems="center"
    >
      <Heading
        pt="120px"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
        fontSize={["40px", "60px"]}
      >
        Contact Us
      </Heading>

     
    </Flex>
    <Box h={["1000px", "1250px"]}>
        <Map/>
      </Box>
    </Flex>
  );
}
