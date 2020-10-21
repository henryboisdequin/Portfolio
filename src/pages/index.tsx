import React from "react";
import About from "../components/About";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import Projects from "../components/Projects";

const Index = () => {
  return (
    <div>
      <Layout />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
