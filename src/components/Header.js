import { Link as ChakraLink, Box, HStack } from "@chakra-ui/react"; // Renomeie o Link do Chakra UI
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: gadelhamarcus27@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/MarcusAires",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/marcus-paulo-aires-23075b29a/",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage header visibility
  const prevScrollPos = useRef(0); // Reference to store previous scroll position

  // Function to handle scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos.current > currentScrollPos;

    setIsVisible(isScrollingUp || currentScrollPos < 50); // Show when scrolling up or near the top
    prevScrollPos.current = currentScrollPos;
  };

  // Add and clean up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    if (anchor === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000} // Garante que o header fique acima de outros elementos
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" px={[4, 8, 16]} py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          {/* Links externos */}
          <nav>
            <HStack spacing={[4, 8]}>
              {socials.map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.url}
                  isExternal // Indica que o link é externo
                  aria-label={social.icon.iconName} // Melhora a acessibilidade
                >
                  <FontAwesomeIcon icon={social.icon} size="xl" />
                </ChakraLink>
              ))}
            </HStack>
          </nav>

          {/* Links internos com scroll suave */}
          <nav>
            <HStack spacing={[4, 8]}>
              <ChakraLink 
              onClick={handleClick("inicio")}
              cursor="pointer"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
  _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
              >
                Inicio
              </ChakraLink>
              <ChakraLink 
              onClick={handleClick("projects")} 
              cursor="pointer"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
  _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
              >
                Meus projetos
              </ChakraLink>
              <ChakraLink 
              onClick={handleClick("contactme")} 
              cursor="pointer"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}  // Garante que o hover também não tenha underline
  _active={{ textDecoration: "none" }}  // Garante que o active também não tenha underline
              >
                Entre em contato
              </ChakraLink>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;