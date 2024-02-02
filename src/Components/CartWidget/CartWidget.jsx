import React from 'react'
import './CartWidget.css'
import { PersonVcardFill } from 'react-bootstrap-icons';
const CartWidget = () => {
  return (
    <div className='container-cardWidget'>
  <PersonVcardFill className='cartIcon'/>
  <p> Turnos</p>
    </div>
  )
}

export default CartWidget