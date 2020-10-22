import React from "react";
import { Box } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { useDevAPI } from "../../../utils/useDevAPI";

const Blog: React.FC<{}> = () => {
  const [articles, error, isLoaded] = useDevAPI();

  const router = useRouter();
  const blogName = router.query;

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded || articles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <Box>
        <Layout />
        <h1>{blogName.slug}</h1>
        <h1>{(articles as Array<any>)[0].description}</h1>
      </Box>
    );
  }
};

export default Blog;
