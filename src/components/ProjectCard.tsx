import { Stack } from "@chakra-ui/core";
import React from "react";
import { Feature } from "./Feature";

interface ProjectType {
  bg: string;
  icons: Array<string>;
  title: string;
  desc: string;
  githubLink: string;
  imageLink: string;
  website?: string;
}

interface CardProps {
  project: ProjectType;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <Stack>
      <Feature
        bg={project.bg}
        icons={project.icons}
        title={project.title}
        desc={project.desc}
        image={project.imageLink}
        github={project.githubLink}
      />
    </Stack>
  );
};
