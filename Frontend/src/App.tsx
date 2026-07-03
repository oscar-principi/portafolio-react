import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";

function App() {
  return (
    <MainLayout>
      <Home />
      <Roadmap />
      <Projects />
    </MainLayout>
  );
}

export default App;