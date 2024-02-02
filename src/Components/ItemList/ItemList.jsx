import React from 'react'
import Item from '../Item/Item'

const ItemList = ({medicos}) => {
  return (
    <div>
    {medicos.map(med =><Item key={med.id} {...med}/>)}
    </div>
  )
}

export default ItemList