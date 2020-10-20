import React from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container variant={"regular"}>
    <DarkModeSwitch />
    <h1>Hello World</h1>
  </Container>
);

export default Index;
