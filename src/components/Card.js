import { Heading, HStack, Image, Text, VStack ,Box, Center} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { px } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, imageSrc}) => {
  return (
    <Box 
    bgColor="white"
    borderRadius='lg'
    textAlign={'center'}
    _hover={{transform:"scale(1.05)", transition: "0.3s"}}
    cursor="pointer"
    boxShadow="md"
    >
      
    <VStack>
    <Image src={imageSrc} alt={title} boxSize="100%" objectFit="cover" borderRadius='lg'/>
    <Heading color="black">{title}</Heading>
    <Text color="grey">{description}</Text>
    <HStack>
    <Text color="black"> <a href="https://github.com/MarcusAires/projeto_lista_de_compras"> Confira o código </a></Text>
    <FontAwesomeIcon color={"black"}icon={faGithub} size="2x"/>
    </HStack>
    </VStack>
    </Box>
  );
};

export default Card;
