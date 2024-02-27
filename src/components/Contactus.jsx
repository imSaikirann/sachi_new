import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import ButtonD from "./Button";
import Map from "./Map";
export default function Contactus() {
  return (
    <Flex direction="column">
      <Box
        w="100vw"
        h={["100vh", "572px"]}
        backgroundImage="contactus.png"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        overflowX="hidden"
      >
        <Flex
          textAlign="left"
          h="60vh"
          justifyContent="center"
          direction="column"
          ml={["10px", "240px"]}
          mt={["", "100px"]}
        >
          <Box>
            <Text fontFamily="Oswald" fontSize="72px" fontWeight="600">Contact us</Text>
          </Box>
        
        </Flex>
       
      </Box>
      <Map/>
    </Flex>
  );
}
