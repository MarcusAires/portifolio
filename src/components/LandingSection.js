import React from "react";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import fotoperfil from "../images/fotoperfil.jpg";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaChalkboardTeacher } from "react-icons/fa";
import { Link as ChakraLink, Box} from "@chakra-ui/react";


const greeting = "Olá, me chamo Marcus!";
const bio1 = "Desenvolvedor Front-end";
const bio2 = "React.js & Node.js";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={[8, 16]}>
      <VStack spacing={[4, 8]} alignItems="center">
        <Avatar
          src={fotoperfil}
          size={["xl", "2xl"]} // Responsivo
          name="Marcus Aires"
        />
        <Heading as="h4" size={["sm", "md"]} noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={[4, 8]}>
        <Heading as="h1" size={["xl", "2xl"]} noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size={["lg", "xl"]} noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
    <HStack margin="3rem">
      <ButtonGroup gap={[4, 8]}>
        <Button colorScheme="blue">Veja meus projetos</Button>
        <Button colorScheme="gray">Peça um orçamento</Button>
      </ButtonGroup>
    </HStack>

 {/* Seção da Stack */}
 <VStack spacing={4} mt={8}>
      <Heading as="h2" size="lg" color="white">
        Minha stack
      </Heading>
      <HStack spacing={[6]}>
      <Icon as={FaReact} boxSize={[8, 14]} color="cyan.400"/>
      <Icon as={FaNodeJs} boxSize={[8, 14]} color="green.400" />
      <Icon as={FaJs} boxSize={[8, 14]} color="yellow.400" />
      <Icon as={FaHtml5} boxSize={[8, 14]} color="red.400" />
      <Icon as={FaCss3Alt} boxSize={[8, 14]} color="blue.400" />
      <Icon as={FaGit} boxSize={[8, 14]} color="orange.400" />
      <Icon as={FaGithub} boxSize={[8, 14]} color="gray.400" />
      </HStack>
    </VStack>

  </FullScreenSection>
);


export default LandingSection;