import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/core";
import React from "react";

interface ArticleCardProps {
  article: any;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      shadow="md"
      mt={4}
      overflow="hidden"
      maxW="800px"
      borderWidth="1px"
      rounded="lg"
    >
      <a target="_blank" href={article.url}>
        <Flex>
          <Box>
            <Link>
              <Flex alignItems="center">
                <Heading
                  fontSize={27}
                  mr={4}
                  as="h1"
                  color={colorMode === "light" ? "#1a1717" : "white"}
                >
                  {article.title}
                </Heading>
              </Flex>
            </Link>

            <Text
              mt={4}
              mb={2}
              color={colorMode === "light" ? "#1a1717" : "white"}
            >
              {article.description}
            </Text>

            <Flex>
              {article.tag_list.map((v: any) => {
                return (
                  <Box
                    key={Math.floor(
                      Math.random() *
                        25 *
                        new Array(10).fill(Math.random() * 10)[0]
                    )}
                    mr={5}
                    width="auto" //"25%"
                    bottom="auto"
                    borderRadius={10}
                  >
                    <Text
                      textAlign="center"
                      fontFamily="monospace"
                      color={colorMode === "light" ? "#383735" : "white"}
                    >
                      {v}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Flex color={"gray.500"}>
            <Text fontWeight="bold">{article.readable_publish_date}</Text>
          </Flex>
        </Flex>
      </a>
    </Box>
  );
};
