import React from "react";
import { Layout } from "../../components/Layout";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Layout>
      <h1>I am blog</h1>
    </Layout>
  );
};

export default Home;
