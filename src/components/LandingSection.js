import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import fotoperfil from "../images/fotoperfil.jpg";

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
      <VStack spacing={[4, 6]}>
        <Heading as="h1" size={["xl", "2xl"]} noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size={["lg", "xl"]} noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;