import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { px } from "framer-motion";
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
  <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src= {fotoperfil}
         size="2xl" 
         name="Marcus Aires" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="2xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="1xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 

export default LandingSection;
