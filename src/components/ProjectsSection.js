import React from "react";
import FullScreenSection from "./FullScreenSection";
import { CardHeader, CardFooter, CardBody, Heading, Card, SimpleGrid,Image,Stack, Text, Divider, ButtonGroup, Button, Icon} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



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
    img: require('../images/gifcrud.gif'),
    repo: 'https://github.com/MarcusAires'
  },
  {
    title: "E-commerce",
    description:
      "Plataforma de e",
    url: "",
    img: require('../images/gifcrud.gif'),
    repo: 'https://github.com/MarcusAires'
  },
  {
    title: "CodeVania Game",
    description:
      "",
    url: "",
    img: require('../images/gifcrud.gif'),
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
      <SimpleGrid spacing={16} gridTemplateColumns={['repeat(1, 1fr)','repeat(2 , 1fr)']}>
        {projects.map((project) => (
          <Card maxW='sm'>
            <CardBody>
            <Image
            src={project.img}
            alt={project.title}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size={['sm', 'md']}>{project.title}</Heading>
              <Text>
                {project.description}
              </Text>
            </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
              <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
               <a href={project.url} target="_blank">
                Visite a página 
                </a> 
              </Button>
              <Button variant='ghost' colorScheme="blue">
                <a href={project.repo} target='_blank'>
                Confira o código
                </a>
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
