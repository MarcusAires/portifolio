import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import ContactSection from './components/ContactSection';


function App() {
  return (
    <ChakraProvider>
          <main>
            <Header />
            <Hamburger/>
            <LandingSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </main>
    </ChakraProvider>
  );
}

export default App;
