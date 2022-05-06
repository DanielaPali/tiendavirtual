import "./CSS/estilo.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home";
import Capturar from "./Componentes/Capturar";
import Comprar from "./Componentes/Comprar";

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="comprar" element={<Comprar />} />
        <Route path="capturar" element={<Capturar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
