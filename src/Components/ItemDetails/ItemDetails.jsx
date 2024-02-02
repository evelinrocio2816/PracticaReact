import React from 'react'

const ItemDetails = ({id, name, image,especialidad}) => {
  return (
    <div className='divContainerItem'>
    <div className="item-container">
      <img src={image} alt={name} className="item-image" />
      <h2 className="item-name">Nombre:{name}</h2>
      <h3 className="item-especialidad">Especialidad:{especialidad}</h3>
      <h2 className="item-id">ID:{id}</h2>
      
    </div>
    </div>
  )
}

export default ItemDetails