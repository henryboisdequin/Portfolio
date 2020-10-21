import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/core";
import React from "react";

export function Feature({ title, desc, image, icons, bg, github }) {
  const { colorMode } = useColorMode();
  console.log(desc);

  return (
    <Box
      p={5}
      shadow="md"
      mt={4}
      overflow="hidden"
      maxW="auto"
      borderWidth="1px"
      rounded="lg"
      bg={bg}
    >
      <Flex>
        <Box>
          <Flex alignItems="center">
            <Heading
              fontSize={27}
              mr={4}
              as="h1"
              color={colorMode === "light" ? "#1a1717" : "white"}
            >
              {title}
            </Heading>
            <Link>
              <a target="_blank" href={github}>
                <Image src="/assets/github.png" size="30px" />
              </a>
            </Link>
          </Flex>

          <Text
            mt={4}
            mb={2}
            color={colorMode === "light" ? "#1a1717" : "white"}
          >
            {desc}
          </Text>

          <Flex>
            {icons.map((v: any) => {
              return (
                <Box
                  mr={5}
                  width="25%"
                  bottom="auto"
                  bg={v.color}
                  borderRadius={10}
                >
                  <Text
                    textAlign="center"
                    color={colorMode === "light" ? "#383735" : "#383735"}
                  >
                    {v.name}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Box>
          <Image src={image} alt={image}></Image>
        </Box>
      </Flex>
    </Box>
  );
}