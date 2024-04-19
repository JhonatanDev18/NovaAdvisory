import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Cambia esto según tus preferencias de tiempo
};

const Carrusel = ({ imagenes }) => {
  return (
    <Slider {...settings}>
      {imagenes.map((imagen, index) => (
        <div key={index} className="flex justify-center items-center"> {/* Envuelve la imagen en un div y aplica estilos a este div */}
          <img
            src={imagen.url}
            alt={imagen.alt}
            style={{ maxWidth: "100%", height: "auto" }} // Estilo para la imagen
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;
