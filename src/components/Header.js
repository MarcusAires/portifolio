import { Link as ChakraLink } from "@chakra-ui/react"; // Renomeie o Link do Chakra UI
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


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
      top="0"
      width="100%"
      bg="teal"
      transition="transform 0.3s ease"
      transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
    >
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Links externos */}
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.url}
                  isExternal // Indica que o link é externo
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </ChakraLink>
              ))}
            </HStack>
          </nav>

          {/* Links internos com scroll suave */}
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("inicio")}style={{cursor: "pointer"}}>Inicio</a>
              <a onClick={handleClick("projects")}style={{cursor: "pointer"}}>Projetos</a>
              <a onClick={handleClick("contactme")}style={{cursor: "pointer"}}>Entre em contato</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </Box>

  );
};

export default Header;
