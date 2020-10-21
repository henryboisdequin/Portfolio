import React from "react";
import { Box } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

const Blog: React.FC<{}> = () => {
  const router = useRouter();
  const blogName = router.query;
  return (
    <Box>
      <Layout />
      <h1>{blogName.name}</h1>
    </Box>
  );
};

export default Blog;
