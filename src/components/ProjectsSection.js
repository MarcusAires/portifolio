import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Espaço React",
    description:
      "Uma caixa de ferramentas prática para criar componentes AR incríveis em um aplicativo React, com integração ao Redux via middleware",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Scroll infinito React",
    description:
      "Uma folha inferior rolável com suporte à virtualização, animações nativas a 60 FPS e totalmente implementada no ambiente JavaScript.🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Galeria de fotos",
    description:
      "Uma plataforma completa para fotógrafos compartilharem e monetizarem suas fotos, permitindo que eles tenham uma segunda fonte de renda.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Planejador de eventos",
    description:
      "Um aplicativo móvel para quem busca lazer, permitindo descobrir eventos e atividades únicas na sua cidade com poucos toques.",
    getImageSrc: () => require("../images/photo4.jpg"),
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
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
