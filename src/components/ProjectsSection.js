import React from "react";
import FullScreenSection from "./FullScreenSection";
import { CardHeader, CardFooter, CardBody, Heading, Card, SimpleGrid,Image,Stack, Text} from "@chakra-ui/react";
//import Card from "./Card";

const projects = [
  {
    title: "Lista de compras",
    description:
      "Um CRUD simples que usa apenas HTML, CSS e javascript para criar uma lista de compras com modal, responsividade e localstorage",
    getImageSrc: () => require("../images/gifcrud.gif"),
    url: "https://lista-de-compras-mercado-easy.vercel.app/",
    image: '/src/images/gifcrud.gif'
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
      <SimpleGrid>
        {projects.map((project) => (
          <Card maxW='sm'>
            <CardBody>
            <Image
            src={project.image}
            alt={project.title}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{project.title}</Heading>
              <Text>
                {project.description}
              </Text>
            </Stack>
            </CardBody>
          </Card>
        ))}
        </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
