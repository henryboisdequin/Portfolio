import React from "react";
import { Container } from "./Container";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import NextLink from "next/link";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <Flex>
        <Box mr="auto">
          <Text>Hello, my name is</Text>
          <Heading
            size="xl"
            style={{ color: colorMode === "light" ? "#474b4f" : "white" }}
          >
            Henry Boisdequin.
          </Heading>
          <Heading size="lg" style={{ color: "#757980" }} mt={2}>
            A swimmer and programmer.
          </Heading>
          <NextLink href="/contact">
            <Button leftIcon="email" variantColor="teal" variant="solid" mt={3}>
              Contact Me
            </Button>
          </NextLink>
        </Box>
        <Box ml="auto" mt={8}>
          <Text></Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
