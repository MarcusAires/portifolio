import React from "react";
import FullScreenSection from "./FullScreenSection";
import { CardHeader, CardFooter, CardBody, Heading, Card, SimpleGrid, Image, Stack, Text, Divider, ButtonGroup, Button, Icon, HStack } from "@chakra-ui/react";
import Lottie from 'lottie-react'; // Importe o Lottie
import animationCRM from '../animations/crm-animation.json';
import animationEcommerce from '../animations/ecommerce-animation.json';
import animationGame from '../animations/game-animation.json';
import { FaGithub } from "react-icons/fa";
import crudGif from "../images/gifcrud.gif";
import agendagif3 from "../images/Design sem nome.gif";
import gifAppTempo from "../images/gifAppTempo.gif";




const projects = [
  {
    title: "Lista de compras",
    description:
      "Um CRUD simples que usa apenas HTML, CSS e javascript para criar uma lista de compras com modal, responsividade e localstorage",
    url: "https://lista-de-compras-mercado-easy.vercel.app/",
    img: crudGif,
    repo: 'https://github.com/MarcusAires/projeto_lista_de_compras.git'
  },
  {
    title: "App AgendaBarber",
    description:
      "Uma aplicação web para gerenciar agendamentos focado no ramo de barbearias com rotas para página admin e página do cliente, com backend em express",
    url: "https://agendabarber-1ngf.onrender.com/",
    img: agendagif3,
    repo: 'https://github.com/MarcusAires/agendaBarber.git'
  },
  {
    title: "Previsão do tempo",
    description:
      "página simples construida em javascript, html e css usando a API weather para previsão do tempo filtrando por cidade",
    url: "https://previtempo.vercel.app/",
    img: gifAppTempo,
    repo: 'https://github.com/MarcusAires/appPrevTempo.git'
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
     // backgroundColor="#2A4365"
      bg="transparent"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Meus projetos
      </Heading>
      <SimpleGrid spacing={16} gridTemplateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
        {projects.map((project) => (
          <Card maxW='sm' key={project.title}>
            <CardBody>
              {project.url ? ( // Se houver URL, exibe a imagem
                <Image
                  src={project.img}
                  alt={project.title}
                  borderRadius='lg'
                />
              ) : ( // Se não houver URL, exibe a animação Lottie
                <Lottie
                  animationData={
                    project.title === "CRM/Dashboard" ? animationCRM :
                      project.title === "E-commerce" ? animationEcommerce :
                        animationGame
                  }
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '200px' }}
                />
              )}
              <Stack mt='6' spacing='3'>
                <Heading size={['sm', 'md']}>{project.title}</Heading>
                <Text>
                  {project.description}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' fontSize={['sm', 'md']}>
                  <a href={project.url || "#"} target="_blank" rel="noopener noreferrer">
                    {project.url ? "Visite a página" : "Em construção"}
                  </a>
                </Button>
                <Button variant='ghost' colorScheme="blue" fontSize={['sm', 'md']}>
                  <HStack>
                    <a href={project.repo} target='_blank' rel="noopener noreferrer">
                      Confira o código
                    </a>
                    <Icon as={FaGithub} boxSize={[4, 8]} />
                  </HStack>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;