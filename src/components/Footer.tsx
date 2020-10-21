import React from "react";
import { Box, Link, Image } from "@chakra-ui/core";
interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      mt={10}
      left={0}
      bottom={0}
      width="100%"
      minHeight={10}
      textAlign="center"
      bg="gray.500"
    >
      <Link>
        <a target="_blank" href="https://github.com/henryboisdequin">
          <Image src="/assets/github.png" size="30px" />
        </a>
      </Link>
    </Box>
  );
};
