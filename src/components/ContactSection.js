import { Heading, Box, VStack, Input, Button, Textarea, Text, Link, ButtonGroup, SimpleGrid, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import curriculo from '../images/curriculo.pdf';

function ContactSection() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nzd4qsg', 
        'template_r6mirzl', 
        form.current, {
        publicKey: 'Sju51C0kg6V94WEbW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <FullScreenSection
      backgroundColor="#752D75"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading id="contact-section" textAlign='center' alignItems='center' as='h1'>
        Vamos transformar sua ideia em código?
      </Heading>

      {/* Info e Botões à Direita */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 coluna no mobile, 2 nas telas maiores
        spacing={8}
        alignItems="flex-start"
      >
        {/* Fomulário */}
        <Box mt={10}>
          <form ref={form} onSubmit={sendEmail}>
            <VStack spacing={4} align="stretch">
              <label htmlFor="user_name">Nome</label>
              <input style={{outline: '3px solid hsl(203, 30%, 26%)'}} name="user_name" type="text" placeholder="Nome" />
              
              <label htmlFor="user_email">E-mail</label>
              <input style={{outline: '3px solid hsl(203, 30%, 26%)'}} name="user_email" type="email" placeholder="E-mail" />
              
              <label htmlFor="user_phone">Telefone</label>
              <input style={{outline: '3px solid hsl(203, 30%, 26%)'}} name="user_phone" type="tel" placeholder="Telefone (opcional)" />
              
              <label htmlFor="subject">Assunto</label>
              <input style={{outline: '3px solid hsl(203, 30%, 26%)'}} name="subject" type="text" placeholder="Assunto" />
              
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" placeholder="Sua mensagem" />
              
              <button colorScheme="purple" size="lg" type="submit">
                Enviar
              </button>
            </VStack>
          </form>
        </Box>

        <Box mt={8} ml={{base:8, md:20}}>
          <Heading as="h2" mb={{base:4, md:8}}>Sobre mim</Heading>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:22}}>
            Meu nome é Marcus. Sou um desenvolvedor Front-End certificado pela Meta e graduando em Engenharia de Software.
          </Text>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:22}}>
            Sempre fui muito interessado por filosofia e raciocínio lógico, e percebi que essas coisas não pertencem apenas a uma área de conhecimento, elas fazem parte das nossas vidas.
          </Text>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:22}}>
            Estou atualmente construindo meu caminho ao desenvolvimento Full-Stack com foco na stack MERN. Gostou do que viu por aqui? Entre em contato! Será um prazer ajudar a construir sua ideia.
          </Text>
          <SimpleGrid columns={{base:1, md:4}} spacing={8}>
            <Button as="a" href={curriculo} leftIcon={<FaDownload />} colorScheme="gray" target="_blank" rel="noreferrer">
              Currículo
            </Button>
            <Button as={Link} href="https://www.linkedin.com/in/marcus-paulo-aires-23075b29a/" leftIcon={<FaLinkedin />} colorScheme="blue" target='_blank' rel="noopener noreferrer">
              LinkedIn
            </Button>
            <Button as={Link} href="https://github.com/MarcusAires" leftIcon={<FaGithub />} colorScheme="gray" target='_blank' rel="noopener noreferrer">
              GitHub
            </Button>
            <Button as={Link} href="https://wa.me/5584999479036" leftIcon={<FaWhatsapp />} colorScheme="green" target='_blank' rel="noopener noreferrer">
              WhatsApp
            </Button>
          </SimpleGrid>
        </Box>

        
      </SimpleGrid>
    </FullScreenSection>
  );
}

export default ContactSection;
