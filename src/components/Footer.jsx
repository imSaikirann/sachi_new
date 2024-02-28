import { HStack, Box, Text, Image, VStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <HStack h="519px" w="100%" bg="#1B1F27">
        <Box ml="240px" alignItems="flex-start" spacing={4} w="300px">
          <VStack alignItems="left">
            <Image
              src="sachi_logo.png"
              alt="Your Image Alt Text"
              w="103px"
              h="137px"
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
        <Box color="white" h="200px" w="200px" alignItems="left" mb="3.7rem">
          <VStack alignItems="left">
            <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
              About Us
            </Text>
            <VStack spacing={4} alignItems="left">
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Our Vision
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Our Mission
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Our Way
              </Text>
            </VStack>
          </VStack>
        </Box>

        <Box color="white" h="200px" w="200px" alignItems="left" mb="3.7rem">
          <VStack alignItems="left">
            <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
              Competitions
            </Text>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Get Started Us
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Contact Us
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Needs Helps?
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Join With Us
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Ask Question
              </Text>
              <Text fontSize="16px" fontFamily="oswald" color="white">
                Newsletters
              </Text>
            </VStack>
          </VStack>
        </Box>

        <Box color="white" h="200px" w="200px" alignItems="left" mb="3.7rem">
          <VStack alignItems="left">
            <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
              Quick Links
            </Text>
            <VStack spacing={4} alignItems="left">
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

        <Box
          color="white"
          h="200px"
          w="200px"
          alignItems="left"
          mb="3.7rem"
          mr="240px"
        >
          <VStack alignItems="left">
            <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
              Instagram
            </Text>
            <VStack spacing={4} alignItems="left" mb="10px">
              <HStack spacing={2}>
                <Image
                  src="post1.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
                <Image
                  src="post2.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
                <Image
                  src="post3.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
              </HStack>
            </VStack>
            <VStack spacing={4} alignItems="left">
              <HStack spacing={2}>
                <Image
                  src="post1.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
                <Image
                  src="yello_post.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
                <Image
                  src="post3.png"
                  alt="Your Image Alt Text"
                  w="83px"
                  h="83px"
                />
              </HStack>
            </VStack>
            <Box mt="3rem">
              <HStack spacing="2">
                <a href="https://instagram.com/sachi_events_28?igshid=MzMyNGUyNmU2YQ==">
                  <Icon as={FaInstagram} boxSize="6" color="white" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61553202830750&mibextid=ZbWKwL">
                  <Icon as={FaFacebook} boxSize="6" color="white" />
                </a>
                <Icon as={FaTwitter} boxSize="6" color="white" />
                <Icon as={FaLinkedin} boxSize="6" color="white" />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>

      <HStack
        spacing={2}
        h="80px"
        bg="#11161E"
        justify="space-between"
        align="center"
        ml="240px"
        mr="240px"
      >
        <Box color="white" fontSize="14px" fontFamily="oswald">
          Copyright by
          <Text as="span" color="#FFA800">
            {" "}
            Sachi Events.
          </Text>{" "}
          All Rights Reserved
        </Box>
        <HStack
          color="white"
          spacing={4}
          justify="space-between"
          align="center"
          fontSize="14px"
          fontFamily="oswald"
        >
          <Box>
            {" "}
            <a href="/">Privacy</a>
          </Box>
          <Box>
            <a href="/">Terms & Conditions</a>
          </Box>
        </HStack>
      </HStack>
    </>
  );
}
