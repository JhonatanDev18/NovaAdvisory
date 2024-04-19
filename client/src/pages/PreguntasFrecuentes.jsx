import React from "react";
import CardSimple from "../components/CardSimple.jsx";
import SalirVista from "../components/SalirVista.jsx";

const preguntas = [
  { 
    pregunta: "Quiénes somos",
    respuesta: "Somos una compañía colombiana, productora y comercializadora de marcas de vestuario y moda, con un modelo de negocio, estructurado bajo estas cuatro líneas: Hilandería, Paquete completo, Industria, Marcas, con cerca de noventa años de trayectoria en el mercado, fundada por tres emprendedores colombianos, Octavio Echavarría Hernández, Julio Echavarría Hernández y Alfredo Mesa Vélez, quienes en la década de los años treinta, le apostaron a su sueño de construir empresa, consolidándola bajo el nombre Zigzag y que se dedicaba a producir calcetines para niños."
  },
  { 
    pregunta: "¿Que es Nova?",
    respuesta: "Yo soy nova, una asesora digital. Diseñada para ayudarte en tu proceso en tienda."
  },
  { 
    pregunta: "¿Cuantas camisas hay de color blanco?",
    respuesta: "Tenemos actualmente 50 camisas de color blanco en stock."
  },
  { 
    pregunta: "¿Cómo funcionan las devoluciones?",
    respuesta: "Las devoluciones pueden realizarse en un plazo de 30 días a partir de la fecha de compra. Debes presentar el recibo de compra y el artículo debe estar en su estado original."
  },
  { 
    pregunta: "¿Hay pantalones en algodón?",
    respuesta: "Sí, tenemos una variedad de pantalones fabricados en algodón."
  },
  { 
    pregunta: "¿Cuál es el material principal de la ropa?",
    respuesta: "El material principal de nuestra ropa es algodón orgánico, que es suave, transpirable y respetuoso con el medio ambiente."
  }
];

const PreguntasScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <SalirVista/>
        <div className="md:w-1/2" />
        <div className="md:w-1/2 md:pl-0 mt-2 md:mt-0 pr-10 pt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h2 className="text-center text-2xl font-bold">Preguntas frecuentes</h2>
            </div>
            <div className="flex flex-wrap -mx-2">
              {preguntas.map((pregunta, index) => (
                <CardSimple key={index} pregunta={pregunta.pregunta} respuesta={pregunta.respuesta} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasScreen;
