import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  useMediaQuery,
  Circle,
} from "@chakra-ui/react";
import React from "react";

export default function AboutFourth() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      alignItems="center"
      direction={["column", "column"]}
      justifyContent="center"
      h={!isLargerThan800 ? "auto" : "420px"}
      w={["100vw", "100vw"]}
      bg="#FFA800"
      p="1rem"
    >
      <Box textAlign="center">
        <Text fontSize={["18px", "32px"]} fontFamily="Oswald" fontWeight="600">
          Terms and Conditions
        </Text>
        <Flex
          direction={["column", "row"]}
          alignItems="center"
          mt="2rem"
          fontFamily="Oswald"
          fontSize={["18px", "20px"]}
          gap="3rem"

        >
          <Box display="flex" alignItems="center" flexDirection="column" mb="1rem">
            <Circle bg="white" w="92px" h="92px">
              <Image
                src="outSidefood.png"
                alt="Outside Food Icon"
                boxSize="90px"
                objectFit="cover"
                w="68px"
                h="68px"
              />
            </Circle>
            <Box w="120px">
              <Text>Outside food is not allowed</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Circle bg="white" w="92px" h="92px">
              <Image
                src="rangoli.png"
                alt="Outside Food Icon"
                boxSize="90px"
                objectFit="cover"
                w="68px"
                h="68px"
              />
            </Circle>
            <Box w="200px">
              <Text>
                For Rangoli & Sketching participants need to bring their
                materials
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Circle bg="white" w="92px" h="92px">
              <Image
                src="dance.png"
                alt="Outside Food Icon"
                boxSize="90px"
                objectFit="cover"
                w="50px"
                h="55px"
              />
            </Circle>
            <Box w="220px">
              <Text>
                The Dance Competion song duration should not exceed 3 minutes
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column" mt="1.2rem">
            <Circle bg="white" w="92px" h="92px">
              <Image
                src="leave.png"
                alt="Outside Food Icon"
                boxSize="90px"
                objectFit="cover"
                w="50px"
                h="55px"
              />
            </Circle>
            <Box w="300px">
              <Text>
                Participants should not leave the ground on Day 3, until we
                announce the winners; if the winner is unavailable, the prize
                will go to the other participant
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Circle bg="white" w="92px" h="92px">
              <Image
                src="certi.png"
                alt="Outside Food Icon"
                boxSize="90px"
                objectFit="cover"
                w="50px"
                h="55px"
              />
            </Circle>
            <Box w="220px">
              <Text>We will provide E-Certificate to all the participants</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
