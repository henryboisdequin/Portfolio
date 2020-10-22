import React from "react";
import { Container } from "./Container";
import { Box, Flex, Heading } from "@chakra-ui/core";
import { Card } from "./ProjectCard";

const projects: Array<object> = [
  {
    bg: "teal.400",
    title: "Blog",
    desc:
      "A fullstack blog site combing some features of Reddit and Medium. I used a frontend of Next.js, Chakra-ui, React.js, and URQL. A backend of Typeorm, GraphQL/TypeGraphQL, and Node.js.",
    githubLink: "https://github.com/henryboisdequin/Blog",
    imageLink: "/assets/blog.png",
    icons: [
      { name: "Typescript", color: "blue.300" },
      { name: "Next.js", color: "white" },
      { name: "GraphQL", color: "pink.300" },
      { name: "PostgreSQL", color: "orange.300" },
      { name: "URQL", color: "green.400" },
    ],
  },
  {
    bg: "orange.300",
    title: "AI Stock Trader",
    desc:
      "Created a DQN AI Agent which chooses to sell, buy, or keep stocks from various companies. This DQN AI Agent is built using Tensorflow, Numpy, Pandas, and the reinforcement learning algorithm.",
    githubLink: "https://github.com/henryboisdequin/AI-Stock-Trader",
    imageLink:
      "https://raw.githubusercontent.com/henryboisdequin/AI-Stock-Trader/master/test.png",
    icons: [
      { name: "Python", color: "blue.300" },
      { name: "Tensorflow", color: "green.400" },
      { name: "Numpy", color: "purple.300" },
      { name: "Pandas", color: "white" },
    ],
  },
  {
    bg: "purple.400",
    title: "Sorting Visualiser",
    desc:
      "This is a Sorting Visualiser built with React. The algorithms that were used: Quick Sort, Merge Sort, Insertion Sort, and Bubble Sort.",
    githubLink: "https://github.com/henryboisdequin/Sorting-Visualiser",
    imageLink:
      "https://raw.githubusercontent.com/henryboisdequin/Sorting-Visualiser/master/visual.png",
    icons: [
      { name: "React.js", color: "blue.300" },
      { name: "Javascript", color: "yellow.400" },
    ],
  },
  {
    bg: "green.500",
    title: "AI Draws Numbers",
    desc:
      "Created a GAN neural network this Tensorflow 2 that can draw numbers using the MNIST digit dataset.",
    githubLink: "https://github.com/henryboisdequin/AI-Draws-Numbers",

    imageLink: "/assets/ai_draws.png",
    icons: [
      { name: "Juypter Notebook", color: "blue.300" },
      { name: "Tensorflow", color: "green.400" },
      { name: "Numpy", color: "purple.300" },
      { name: "Pandas", color: "white" },
      { name: "Keras", color: "orange.400" },
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
          {projects.map((v: any) => {
            return (
              <Card
                key={Math.floor(Math.random() * 10 * v.desc.length)}
                project={v as any}
              ></Card>
            );
          })}
        </Flex>
      </Box>
    </Container>
  );
};

export default Projects;
