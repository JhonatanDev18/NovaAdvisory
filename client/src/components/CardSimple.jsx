import React, { useState } from "react";

const CardSimple = ({ pregunta, respuesta }) => {
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(respuesta);
      utterance.lang = 'es-CO'; // Establecer el idioma a español con acento colombiano
      synthesis.speak(utterance);
    } else {
      alert('Lo siento, tu navegador no admite la síntesis de voz.');
    }
  };
  

  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4 ${
        hovered ? "shadow-lg bg-gray-200" : "shadow-md bg-white"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      <div className="p-4">
        <p className="text-center">{pregunta}</p>
      </div>
    </div>
  );
};

export default CardSimple;
