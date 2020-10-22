import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

const Blog: React.FC<{}> = () => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=hb")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticles(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const router = useRouter();
  const blogName = router.query;

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    console.log(articles);
    return (
      <Box>
        <Layout />
        <h1>{blogName.slug}</h1>
        {/* <h1>{(articles as Array<any>)[0].description}</h1> */}
      </Box>
    );
  }
};

export default Blog;
