import React from "react";
import { Link } from "react-router-dom";

const SalirVista = () => {
  return (
      <Link to="/" className="absolute top-0 left-0 mt-4 ml-4 md:mt-0 md:ml-0">
          <i className="fas fa-arrow-left"></i> Salir
      </Link>
  );
};

export default SalirVista;
