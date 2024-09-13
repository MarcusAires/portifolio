import { Heading, HStack, Image, Text, VStack ,Box, Center} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { px } from "framer-motion";

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
    <Text color="black">Saiba mais</Text>
    <FontAwesomeIcon color={"black"}icon={faArrowRight} size="1x"/>
    </HStack>
    </VStack>
    </Box>
  );
};

export default Card;
