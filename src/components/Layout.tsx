import React from "react";
import { NavBar } from "./Navbar";
import { Container, ContainerVariant } from "./Container";

interface LayoutProps {
  variant?: ContainerVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <Container variant={variant}>{children}</Container>
    </>
  );
};
