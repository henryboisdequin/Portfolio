import { useState, useEffect } from "react";

export const useDevAPI = () => {
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

  return [articles, error, isLoaded];
};
