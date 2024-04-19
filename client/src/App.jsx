import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MapaTienda from "./pages/MapaTienda.jsx";
import ProductoPage from "./pages/ProductoPaga.jsx";
import LlamarAsesor from "./pages/LlamarAsesor.jsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.jsx";

function App(){
  return(
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mapa-tienda" element={<MapaTienda />}/>
        <Route path="/buscar-prenda" element={<ProductoPage />}/>
        <Route path="/llamar-asesor" element={<LlamarAsesor />}/>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App