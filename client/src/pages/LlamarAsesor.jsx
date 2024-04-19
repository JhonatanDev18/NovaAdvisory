import React, { useEffect } from "react";
import SalirVista from "../components/SalirVista.jsx";
import ringtone from "../assets/ringtone.mp3"; // Importa el sonido de teléfono

const LlamarAsesor = () => {
  // Crea un elemento de audio y asigna el sonido de teléfono como su fuente
  const audio = new Audio(ringtone);

  // Reproduce el sonido al entrar a la pantalla y detenlo al salir
  useEffect(() => {
    // Función para reiniciar el sonido cuando termine
    const handleEnded = () => {
      audio.currentTime = 0; // Reinicia el sonido al inicio
      audio.play(); // Reproduce el sonido nuevamente
    };

    // Agrega el evento ended para reiniciar el sonido cuando termine
    audio.addEventListener("ended", handleEnded);

    // Reproduce el sonido al entrar
    audio.play();

    // Limpia el evento al salir de la pantalla para evitar fugas de memoria
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <SalirVista />
        <div className="md:w-1/2" />
        <div className="md:w-1/2 md:pl-0 mt-2 md:mt-0 pr-10 pt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h2 className="text-center text-2xl font-bold">
                Llamando a un asesor...
              </h2>
            </div>
            <div>
              <img
                src="./llamada.png"
                alt="Imagen de la tarjeta"
                className="ml-40 w-3/6 items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LlamarAsesor;
