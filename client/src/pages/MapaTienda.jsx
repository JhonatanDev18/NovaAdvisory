import React from "react";
import SalirVista from "../components/SalirVista.jsx";

const MapaTienda = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <SalirVista/>
        <div className="md:w-1/2">
        </div>
        <div className="md:w-1/2 md:pl-0 mt-2 md:mt-0 pr-10 pt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h2 className="text-center text-2xl font-bold">Recorre la tienda</h2>
            </div>
            <div>
              <img src="./mapa.png" alt="Imagen de la tarjeta" className="w-full" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaTienda;
