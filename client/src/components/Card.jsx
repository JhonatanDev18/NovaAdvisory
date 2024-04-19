import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, description, image, to, textoRedic, iconName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex w-full">
        <div className="w-1/2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 py-4">
            <NavLink to={to} className="button mt-4 mx-auto flex items-center">
              {textoRedic} <i className={`ms-2 fas fa-${iconName}`}></i>
            </NavLink>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full pt-10" src={image} alt="Imagen de la tarjeta" />
        </div>
      </div>
    </div>
  );
};

export default Card;
