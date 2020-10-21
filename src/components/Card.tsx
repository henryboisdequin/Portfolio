import { Stack } from "@chakra-ui/core";
import React from "react";
import { Feature } from "./Feature";

// ? Need help with this
// interface ProjectType {
//   title: string;
//   desc: string;
//   githubLink: string;
//   imageLink: string;
//   website?: string;
// }

interface CardProps {
  project: any;
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
