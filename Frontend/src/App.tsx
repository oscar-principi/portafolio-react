import { Toaster } from 'sonner';
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <MainLayout>
      <Toaster position="bottom-center" richColors />
      <Home />
      <Projects />
    </MainLayout>
  );
}

export default App;