import { Toaster } from 'sonner';
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 
import TechStack from './pages/TechStack';

function App() {
  return (
    <MainLayout>
      <Toaster position="bottom-center" richColors />
      <Home />
      <Projects />
      <TechStack />
      <Contact />
    </MainLayout>
  );
}

export default App;