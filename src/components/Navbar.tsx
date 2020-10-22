import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";
import React, { useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const MenuItems = ({ children }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );
};

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "teal.500" : "teal.700"}
      color="white"
      border={0}
    >
      <Flex align="center" mr={5}>
        <NextLink href="/">
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Link>Henry Boisdequin</Link>
          </Heading>
        </NextLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <a href="mailto:boisdequinhenry19@gmail.com">
          <Link>
            <MenuItems>Contact</MenuItems>
          </Link>
        </a>
        <NextLink href="/blog">
          <Link>
            <MenuItems>Blog</MenuItems>
          </Link>
        </NextLink>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};
