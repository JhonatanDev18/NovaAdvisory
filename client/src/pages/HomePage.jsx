import React from "react";
import Avatar from "../components/Avatar.jsx";
import Card from "../components/Card.jsx";

function HomePage() {
  return (
    <div className="flex w-full mt-0">
      <div className="w-1/2">
        <div>
          <Avatar />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-black font-bold text-2xl text-center">Nova Advisory - Asesora digital</h2>
          <div className="grid grid-cols-2 gap-4 mt-10 justify-center">
            <Card
              title="Ubicación"
              description="Recorre la tienda"
              image="./ubicacion-animicion-gif.gif"
              to="/mapa-tienda"
              textoRedic="Ubicarse"
              iconName="map-marker-alt"
            />
            <Card
              title="Búsqueda"
              description="Encuentra tu prenda"
              image="./search-prenda-gif.gif"
              to="/buscar-prenda"
              textoRedic="Buscar"
              iconName="search"
            />
            <Card
              title="Asesor"
              description="Llama a un asesor"
              image="./asesor-gif.gif"
              to="/llamar-asesor"
              textoRedic="Llamar"
              iconName="phone"
            />
            <Card
              title="Preguntas"
              description="Preguntas más frecuentes"
              image="./preguntas-gif.gif"
              to="/preguntas-frecuentes"
              textoRedic="Pregunta"
              iconName="question"
            />
            <div className="pl-24 w-max flex justify-center items-center">
              <img src="./crystal.png" alt="Imagen de Crystal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
