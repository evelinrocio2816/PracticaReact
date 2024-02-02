import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, especialidad, image }) => {
  return (
    <div className='divContainerItem'>
    <div className="item-container">
      <img src={image} alt={`Imagen de ${name}`} className="item-image" />
      <h2 className="item-name">Nombre: {name}</h2>
      <h3 className="item-especialidad">Especialidad: {especialidad}</h3>
      <h2 className="item-id">ID: {id}</h2>
      <button className="item-button"><Link to={`/item/${id}`} >Ver detalles</Link></button>
    </div>
    </div>
  );
};

export default Item;
