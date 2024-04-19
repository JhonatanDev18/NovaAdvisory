import React, { useState } from "react";
import { Producto } from "..//api/producto";
import { formatearPrecio } from "../config/utilidades.js";
import Carrusel from "../components/carrusel.jsx";
import SalirVista from "../components/SalirVista.jsx";

const ProductoPage = () => {
  const imagenes = [
    { url: "./zapatos1.jpg", alt: "Descripción de la imagen 1" },
    { url: "./zapatos2.jpg", alt: "Descripción de la imagen 2" },
    { url: "./zapatos3.jpg", alt: "Descripción de la imagen 3" },
    // Agrega más objetos de imagen según sea necesario
  ];  

  const [ean, setEan] = useState("");
  const [prenda, setPrenda] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      let request = {
        ean: ean,
        pais: "COL",
        tienda: "999999"
      };
      setError(null);
      setPrenda(null);
      const respuesta = await Producto(request);
      
      if(respuesta.error){
        setError(respuesta.mensaje);
      }else{
        setPrenda(respuesta.producto);
      }

      setEan("");
    } catch (error) {
      setError("Error al obtener la información del producto. Por favor, intenta de nuevo." + error);
      setEan("");
    }
  };  

  const handleInputChange = (event) => {
    setEan(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <SalirVista/>
        <div className="md:w-1/2">
        </div>
        <div className="md:w-1/2 md:pl-0 mt-2 md:mt-0 pr-10 pt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl mb-4 font-bold">Buscar Producto</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Introduce el EAN del producto"
                value={ean}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-4/5"
              />
              <button onClick={handleSearch} className="button absolute top-0 right-0 h-full px-4 py-2 rounded-md">
                Buscar
              </button>
            </div>
            {error && <p className="mt-2">{error}</p>}
            {prenda && (
              <div className="mt-4 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-center text-lg font-semibold mb-4">{prenda.nombre}</h2>
                <div className="items-center ml-44 mr-44">
                  <Carrusel imagenes={imagenes} />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-10">
                  <div>
                    <p><span className="font-semibold">Precio:</span> {formatearPrecio(prenda.precio)}</p>
                    <p><span className="font-semibold">Talla:</span> {prenda.talla}</p>
                    <p><span className="font-semibold">Composición:</span> {prenda.composicion}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Marca:</span> {prenda.marca}</p>
                    <p><span className="font-semibold">Color:</span> {prenda.color}</p>
                    <p><span className="font-semibold">Impuesto:</span> {formatearPrecio(prenda.impuesto)}</p>
                  </div>
                </div>
                <p className="mt-2"><span className="font-semibold">Tipo de prenda:</span> {prenda.tipoPrendaNombre}</p>
                
                <button className="button mt-4 mx-auto flex items-center">
                   Comprar  <i className="ms-2 fa fa-shopping-bag"> </i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;
