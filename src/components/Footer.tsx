import React from "react";
import { Link, Image, Flex, Box, useColorMode } from "@chakra-ui/core";

interface FooterProps {}

export const FooterItem: React.FC<{ itemArray: any; bg: string }> = ({
  itemArray,
  bg,
}) => {
  return itemArray.map((item: { href: string; src: string }) => {
    return (
      <Box
        borderRadius={4}
        ml={2}
        key={Math.floor(item.src.length * 10 * Math.random())}
        bg={bg}
      >
        <Link>
          <a target="_blank" href={item.href}>
            <Image src={item.src} size="30px" />
          </a>
        </Link>
      </Box>
    );
  });
};

export const Footer: React.FC<FooterProps> = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Box mt={10}>
      <Flex
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        height="120px"
        boxSizing="border-box"
        width="1200px"
        maxWidth="100%"
        borderTop={
          colorMode === "light" ? "2px solid #a19f9c" : "2px solid white"
        }
        marginTop="80px"
        margin="auto"
      >
        <FooterItem
          bg="white"
          itemArray={[
            {
              href: "https://github.com/henryboisdequin",
              src: "/assets/github.png",
            },
            {
              href: "https://stackoverflow.com/users/13753914/henry",
              src: "/assets/stack.png",
            },
          ]}
        />
      </Flex>
    </Box>
  );
};
