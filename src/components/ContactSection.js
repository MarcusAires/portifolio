import { 
  Heading,
   Box, 
   VStack, 
    Button, 
    Text, 
    Link, 
    SimpleGrid, 
    useToast
 }
  from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import curriculo from '../images/curriculo.pdf';

function ContactSection() {
  
  const toast = useToast()
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
          toast({
            position:'top',
            title: 'Mensagem enviada com sucesso!',
            description: "Obrigado por entrar em contato. Responderei a mensagem o mais rápido possível!",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <FullScreenSection
      // backgroundColor="#2A4365"
      bg="transparent"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading id="contact-section" textAlign='center' alignItems='center' as='h1'>
        Vamos transformar sua ideia em código?
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 coluna no mobile, 2 nas telas maiores
        spacing={8}
        alignItems="flex-start"
      >
        {/* Fomulário */}
        <Box mt={4}>
          <Heading margin={'25px'}>Peça um orçamento</Heading>
          <form ref={form} onSubmit={sendEmail} 
          style={{maxWidth:'500px',
           width:'100%', 
           background:'#fff', 
           padding:'25px 25px 30px',
           borderRadius:'8px',
           boxShadow:'0 0 10px rgba(0,0,0, .1)',
           color:'#333',
           margin:'25px auto'
           }}>
            <VStack spacing={4} align="stretch" mt={4}>
              <label htmlFor="nome">Nome *</label>
              <input style={{
                width:'100%',
                height:'50px',
                background:'transparent',
                border:'2px solid #ddd',
                outline:'none',
                borderRadius:'8px',
                padding:'16px',
                fontSize:'16px',
                color:'#333',
              }} name="nome" type="text" placeholder="Nome" required/>
              
              <label htmlFor="email">E-mail *</label>
              <input style={{
                width:'100%',
                height:'50px',
                background:'transparent',
                border:'2px solid #ddd',
                outline:'none',
                borderRadius:'8px',
                padding:'16px',
                fontSize:'16px',
                color:'#333',
              }} name="email" type="email" placeholder="E-mail" required/>
              
              <label htmlFor="telefone">Telefone</label>
              <input style={{
                width:'100%',
                height:'50px',
                background:'transparent',
                border:'2px solid #ddd',
                outline:'none',
                borderRadius:'8px',
                padding:'16px',
                fontSize:'16px',
                color:'#333',
              }} name="telefone" type="tel" placeholder="Telefone (opcional)" />
              
              <label htmlFor="assunto">Assunto</label>
              <input style={{
                width:'100%',
                height:'50px',
                background:'transparent',
                border:'2px solid #ddd',
                outline:'none',
                borderRadius:'8px',
                padding:'16px',
                fontSize:'16px',
                color:'#333',
              }} name="assunto" type="text" placeholder="Assunto" />
              
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea name="mensagem" placeholder="Escreva uma mensagem"
                style={{
                height:'100px',
                resize:'none',
                border:'2px solid #ddd',
                borderRadius:'8px',
                outline:'none',
                padding:'8px',
                paddingLeft:"16px",
              }}
              required/>
              
              <Button bg="#F6AD55" _hover={{ bg: "#ED8936" }} size="lg" type="submit">
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
      {/* Info e Botões*/}
        <Box mt={10} ml={{base:4, md:8}}>
          <Heading as="h2" mb={{base:4, md:8}}>Sobre mim</Heading>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:20}}>
          Olá! Meu nome é Marcus. Sou desenvolvedor Front-End certificado pela Meta e graduando em Engenharia de Software.</Text>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:20}}>
          Minha paixão por filosofia e raciocínio lógico me levou naturalmente ao mundo da programação, onde transformar ideias em código se tornou minha forma de criar soluções e resolver desafios.
          </Text>
          <Text mb={{base:4, md:8}} fontSize={{base:16, md:20}}>
          Atualmente, estou expandindo meus conhecimentos para o desenvolvimento Full-Stack, com foco na stack MERN.
          Gostou do que viu por aqui? Vamos conversar! Será um prazer ajudar a transformar sua ideia em realidade.
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
