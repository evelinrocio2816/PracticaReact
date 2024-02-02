import { useState,useEffect } from "react"
import {getOneDoctor } from "../../AsyncMock"
import ItemDetails from "../ItemDetails/ItemDetails"
import {useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [medicos, setMedicos]=useState()

  const {idItem}= useParams()
  useEffect(() => {
    getOneDoctor(idItem)
    .then(resolve=> setMedicos(resolve))

  }, [idItem])
  
  return (
 <div>
  <ItemDetails {...medicos}/>
 </div>
  )
}

export default ItemDetailContainer