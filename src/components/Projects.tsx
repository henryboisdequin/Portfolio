import React from "react";
import { Container } from "./Container";
import { Box, Flex, Heading } from "@chakra-ui/core";
import { Card } from "./Card";

const projects: Array<object> = [
  {
    bg: "teal.400",
    title: "Blog",
    desc: "A fullstack blog site combing some features of Reddit and Medium.",
    githubLink: "https://github.com/henryboisdequin/Blog",
    imageLink:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babef3da7ea4342a948c024%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1314%26cropX2%3D2845%26cropY1%3D222%26cropY2%3D1752",
    icons: [
      { name: "Typescript", color: "blue.300" },
      { name: "Next.js", color: "white" },
      { name: "GraphQL", color: "pink.300" },
      { name: "PostgreSQL", color: "orange.300" },
    ],
  },
];

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <Container>
      <Box mt={10}>
        <Heading mb={4}>Projects</Heading>
        <Flex flexDirection="column">
          {projects.map((v) => {
            return <Card project={v}></Card>;
          })}
        </Flex>
      </Box>
    </Container>
  );
};

export default Projects;
