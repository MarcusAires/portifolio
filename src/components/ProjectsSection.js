import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Lista de compras",
    description:
      "Um crud simples que usa apenas HTML, CSS e javascript para criar uma lista de compras com modal, responsividade e localstorage",
    getImageSrc: () => require("../images/gifcrud.gif"),
    url: "https://lista-de-compras-mercado-easy.vercel.app/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Meus projetos
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <a href={project.url}>
          <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          />
          </a>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
