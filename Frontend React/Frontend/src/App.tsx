import { Toaster } from 'sonner';
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 

function App() {
  return (
    <MainLayout>
      <Toaster position="bottom-center" richColors />
      <Home />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;