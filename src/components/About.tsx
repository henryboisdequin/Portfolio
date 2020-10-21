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
          <NextLink href="mailto:boisdequinhenry19@gmail.com">
            <Button leftIcon="email" variantColor="teal" variant="solid" mt={3}>
              Contact Me
            </Button>
          </NextLink>
        </Box>
        <Box ml={100} mt={2}>
          <Text>
            I have been <strong>swimming</strong> competitively since the age of
            8. I have been fortunate enough to swim all over the world: India,
            Thailand, Nepal, Jordan, and more! My favourite events are the 200
            free, 100 free, 200 IM, 100 fly, and the four fifties.
          </Text>
          <Text mt={2}>
            I'm a self taught <strong>programmer</strong>. I've dived into the
            fields of web development, machine learning, and mobile development.
            I am proficient with technologies such as GraphQL, Next.js,
            React.js, Tensorflow, Typescript, and PostgreSQL. I am currently
            learning Flutter for mobile development.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
