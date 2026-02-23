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
        bgGradient="linear(to-b, #2A4365, #2C5282, #2B6CB0, #3182CE)"
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
