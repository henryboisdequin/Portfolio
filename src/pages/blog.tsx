import { Box, CircularProgress, Flex } from "@chakra-ui/core";
import React from "react";
import { useDevAPI } from "../../utils/useDevAPI";
import { ArticleCard } from "../components/ArticleCard";
import { Layout } from "../components/Layout";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [articles, error, isLoaded] = useDevAPI();

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded || articles === undefined) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <CircularProgress isIndeterminate size="120px" />
      </Flex>
    );
  } else {
    return (
      <Layout>
        {articles.map((article: any) => {
          return (
            <ArticleCard
              article={article}
              key={Math.floor(
                Math.random() *
                  10 *
                  new Array(10).fill(Math.random() * 10)[
                    Math.floor(Math.random() * 9)
                  ]
              )}
            />
          );
        })}
      </Layout>
    );
  }
};

export default Home;
