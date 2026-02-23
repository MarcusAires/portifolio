import { ChakraProvider,Box } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import ContactSection from './components/ContactSection';


function App() {
  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-b, #25364e, #2e588b, #2f6eb1, #3092ec)"
        minH="100vh"
      >
        <Header />
        <Hamburger />
        <LandingSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
