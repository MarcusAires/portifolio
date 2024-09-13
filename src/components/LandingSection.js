import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { px } from "framer-motion";

const greeting = "Olá, me chamo Marcus!";
const bio1 = "Desenvolvedor frontend";
const bio2 = "especialista em React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  > 
  <VStack spacing={8}>
    <Avatar name="Marcus" src="/fotoperfil.jpg" size="2xl" />
    <Text>{greeting}</Text>
  <VStack>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
