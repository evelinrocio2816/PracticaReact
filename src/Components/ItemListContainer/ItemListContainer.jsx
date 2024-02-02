import React, { useState, useEffect } from 'react'
import './ItemList.css'
import { getDoctors,getDoctorsByCategory } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [medico, setMedico]=useState([])
  
  const {idCategory}=useParams()



  useEffect(() => {

    const functionCategory = idCategory ? getDoctorsByCategory : getDoctors;

    functionCategory(idCategory)
    .then(res => setMedico(res))

  }, [idCategory])
  
  return (
    <div className='container-props'>
        <h2>{props.greeting}</h2>
        <h3>{props.welcome}</h3>
        <ItemList medicos={medico}/>
    </div>
  )
}

export default ItemListContainer