import { Link as ChakraLink, Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Lógica para ocultar/exibir o header ao rolar a página
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 50);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    if (anchor === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setHamburgerOpen(false);
      return;
    }

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setHamburgerOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
      py={4}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" px={[4, 8, 16]}>
        <HStack justifyContent="space-between" alignItems="center">
          {/* Botão do menu hambúrguer */}
          <Box display={{ base: "flex", md: "none" }}>
            <Hamburger isOpen={hamburgerOpen} toggle={() => setHamburgerOpen(!hamburgerOpen)} />
          </Box>

          {/* Links de navegação */}
          <HStack
            as="nav"
            spacing={[4, 8]}
            display={{ base: hamburgerOpen ? "flex" : "none", md: "flex" }}
            flexDirection={{ base: "column", md: "row" }}
            position={{ base: "absolute", md: "static" }}
            top="60px"
            left={0}
            right={0}
            backgroundColor="#18181b"
            py={{ base: 4, md: 0 }}
            zIndex={999}
          >
            <ChakraLink
             onClick={handleClick("inicio")} 
             cursor="pointer"
            _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
            _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
            >
              Início
            </ChakraLink>
            <ChakraLink 
            onClick={handleClick("projects")} 
            cursor="pointer"
            _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
            _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
            >
              Projetos
            </ChakraLink>
            <ChakraLink 
            onClick={handleClick("contactme")} 
            cursor="pointer"
            _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
            _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
            >
              Contato
            </ChakraLink>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
