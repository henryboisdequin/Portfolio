import React from "react";
import { Container } from "./Container";
import { Box, Flex, Heading } from "@chakra-ui/core";
import { Card } from "./Card";

const projects: Array<object> = [
  {
    //   TODO: add blog picture
    bg: "teal.400",
    title: "Blog",
    desc:
      "A fullstack blog site combing some features of Reddit and Medium. I used a frontend of Next.js, Chakra-ui, React.js, and URQL. A backend of Typeorm, GraphQL/TypeGraphQL, and Node.js.",
    githubLink: "https://github.com/henryboisdequin/Blog",
    imageLink:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babef3da7ea4342a948c024%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1314%26cropX2%3D2845%26cropY1%3D222%26cropY2%3D1752",
    icons: [
      { name: "Typescript", color: "blue.300" },
      { name: "Next.js", color: "white" },
      { name: "GraphQL", color: "pink.300" },
      { name: "PostgreSQL", color: "orange.300" },
      { name: "URQL", color: "green.400" },
    ],
  },
  {
    bg: "teal.400",
    title: "AI Stock Trader",
    desc:
      "Created an DQN AI Agent which chooses to sell, buy, or keep stocks from various companies. This DQN AI Agent is built using Tensorflow, Numpy, Pandas, and the reinforcement learning algorithm.",
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
    bg: "teal.400",
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
    bg: "teal.400",
    title: "AI Draws Numbers",
    desc:
      "Created an GAN neural network this Tensorflow 2 that can draw numbers using the MNIST digit dataset.",
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
          {projects.map((v) => {
            return <Card project={v as any}></Card>;
          })}
        </Flex>
      </Box>
    </Container>
  );
};

export default Projects;
