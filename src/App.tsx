import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Fiche from "./pages/Fiche/Fiche";
import Layout from "./components/Layout";
import Apropos from "./pages/Apropos/Apropos";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/fiche/:id" element={<Fiche />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
