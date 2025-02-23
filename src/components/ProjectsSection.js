import React from "react";
import FullScreenSection from "./FullScreenSection";
import { CardHeader, CardFooter, CardBody, Heading, Card, SimpleGrid, Image, Stack, Text, Divider, ButtonGroup, Button, Icon, HStack } from "@chakra-ui/react";
import Lottie from 'lottie-react'; // Importe o Lottie
import animationCRM from '../animations/crm-animation.json';
import animationEcommerce from '../animations/ecommerce-animation.json';
import animationGame from '../animations/game-animation.json';
import { FaGithub} from "react-icons/fa";



const projects = [
  {
    title: "Lista de compras",
    description:
      "Um CRUD simples que usa apenas HTML, CSS e javascript para criar uma lista de compras com modal, responsividade e localstorage",
    url: "https://lista-de-compras-mercado-easy.vercel.app/",
    img: require('../images/gifcrud.gif'),
    repo: 'https://github.com/MarcusAires/projeto_lista_de_compras.git'
  },
  {
    title: "CRM/Dashboard",
    description:
      "Um CRM construido utilizando bibliotecas react para estilização mais rápida como chakra-ui, React.Js, banco de dados postgreSQL e Node.Js no back-end",
    url: "",
    img: require('../images/placeholder.gif'),
    repo: 'https://github.com/MarcusAires'
  },
  {
    title: "E-commerce",
    description:
      "Plataforma de E-commerce com admin panel de modo que o dono da loja possa fazer adição de produtos, exclusão e modificar preços de forma autonôma. Utilizei stack MERN",
    url: "",
    img: require('../images/placeholder.gif'),
    repo: 'https://github.com/MarcusAires'
  },
  {
    title: "CodeVania Game",
    description:
      "Game web inspirado no estilo metroidvania. Game foi construido inteiramente com um framework javascript, Phase.Js",
    url: "",
    img: require('../images/placeholder.gif'),
    repo: 'https://github.com/MarcusAires'
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
      <SimpleGrid spacing={16} gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
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
                <Button variant='solid' colorScheme='blue' fontSize={['sm','md']}>
                  <a href={project.url || "#"} target="_blank" rel="noopener noreferrer">
                    {project.url ? "Visite a página" : "Em construção"}
                  </a>
                </Button>
                <Button variant='ghost' colorScheme="blue" fontSize={['sm','md']}>
                  <HStack>
                  <a href={project.repo} target='_blank' rel="noopener noreferrer">
                    Confira o código 
                  </a>
                    <Icon as={FaGithub} boxSize={[4,8]}/>
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