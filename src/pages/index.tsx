import React from "react";
import About from "../components/About";
import { Layout } from "../components/Layout";
import Projects from "../components/Projects";

const Index = () => {
  return (
    <div>
      <Layout />
      <About />
      <Projects />
    </div>
  );
};

export default Index;
