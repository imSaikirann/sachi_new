import {
  HStack,
  Box,
  Text,
  Image,
  VStack,
  Icon,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaFacebook, } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Flex
        alignItems={["left", "center"]}
        direction={{ base: "column", md: "row" }}
        h={["1100px", "519px"]}
        w="100%"
        bg="#1B1F27"
        p={["20px", "0px"]}
        gap={["3.5rem", "2rem"]}
      >
        <Box
          ml={["0px", "240px"]}
          alignItems="flex-start"
          spacing={4}
          w="300px"
          mt="1rem"
        >
          <VStack alignItems="left">
            <Image
              src="sachi_logo.png"
              alt="Your Image Alt Text"
              w={["70px", "103px"]}
              h={["85px", "137px"]}
              mb="10px"
            />
            <Box
              w="233px"
              padding="0"
              h="80px"
              color="white"
              fontSize="14px"
              fontFamily="oswald"
              mb="12px"
            >
              For us, events are not just moments; they are opportunities for
              transformation. We believe in the power of gatherings to inspire,
              educate, and connect people.
            </Box>
            <Box color="white" fontSize="14px" fontFamily="oswald">
              Join us in creating
            </Box>
            <Box color="white" fontSize="14px" fontFamily="oswald">
              significant memories.
            </Box>
          </VStack>
        </Box>

        <Box color="white" h={["200px", "200px"]} w="200px" alignItems="left">
          <VStack alignItems="left">
            <Text
              fontSize="18px"
              fontFamily="oswald"
              color="white"
              mb={["8px", "18px"]}
            >
              Quick Links
            </Text>
            <VStack spacing={["2", "4"]} alignItems="left">
              <Link to="/">
                <Text fontSize="16px" fontFamily="oswald" color="white">
                  Home
                </Text>
              </Link>
              <Link to="/about">
                <Text fontSize="16px" fontFamily="oswald" color="white">
                  About Us
                </Text>
              </Link>
              <Link to="/competition">
                <Text fontSize="16px" fontFamily="oswald" color="white">
                  Competitions
                </Text>
              </Link>

              <Link to="/register">
                <Text fontSize="16px" fontFamily="oswald" color="white">
                  Registration
                </Text>
              </Link>
              <Link to="/contactus">
                <Text fontSize="16px" fontFamily="oswald" color="white">
                  Contact Us
                </Text>
              </Link>
            </VStack>
          </VStack>
        </Box>
        <Box color="white" h="200px" w="200px" alignItems="left" mr="240px">
          <VStack alignItems="left">
            <Text fontSize="18px" fontFamily="oswald" color="white">
              Digital partner
            </Text>
            <Box w="150px" h="100px" bg="white">
            <VStack spacing={4} alignItems="left" mb="10px">
              <Stack spacing={2}>
                <Image
                  src="d.png"
                  alt="Your Image Alt Text"
                  w="100%"
                  h="100%"
                />
              </Stack>
            </VStack>
            </Box>
          </VStack>
        </Box>
        <Box color="white" h="200px" w="200px" alignItems="left" mr="240px">
          <VStack alignItems="left">
            <VStack spacing={4} alignItems="left" mb="10px">
              <Stack spacing={2}>
                <Image
                  src="baz.jpeg"
                  alt="Your Image Alt Text"
                  w="100%"
                  h="100%"
                />
              </Stack>
            </VStack>
            <HStack spacing={4} mt="1em">
              <a href="https://instagram.com/sachi_events_28?igshid=MzMyNGUyNmU2YQ==">
                <Icon as={FaInstagram} boxSize={6} color="white" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553202830750&mibextid=ZbWKwL">
                <Icon as={FaFacebook} boxSize={6} color="white" />
              </a>
         
            </HStack>
          </VStack>
        </Box>
      </Flex>
      <Box >
      <Flex
      ml={["", "240px"]} mr={["", "230px"]}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
        justify={{ base: "space-between", md: "space-between" }}
        h={{ base: "auto", md: "80px" }}
        color="white"
        fontFamily="oswald"
        px={4}
        py="5"
      >
        <Box fontSize={{ base: "12px", md: "14px" }} mb={{ base: 4, md: 0 }}>
          Copyright by
          <Text as="span" color="#FFA800">
            {" "}
            Sachi Events.
          </Text>{" "}
          All Rights Reserved
        </Box>
        <HStack
          spacing={{ base: 2, md: 4 }}
          fontSize={{ base: "12px", md: "14px" }}
          fontFamily="oswald"
        >
          <Box>
            <a href="/">Privacy</a>
          </Box>
          <Box>
            <a href="/">Terms & Conditions</a>
          </Box>
        </HStack>
      </Flex>
    </Box>
    </>
  );
}
