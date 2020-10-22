import React from "react";
import { Box, Text } from "@chakra-ui/core";

interface ArticleCardProps {
  article: any;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  console.log(article);
  return (
    <Box>
      <Text>{article.description}</Text>
    </Box>
  );
};
