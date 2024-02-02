import React, { useState , useEffect} from 'react'

const ItemCount = ({stock, initial}) => {
 const [counter, setCounter]=useState(initial);
 const [color, setColor]=useState("black")

  useEffect(()=>{
    document.title=`Contador ${counter}`

    if (counter > 2) {
      setColor("red") 
    }else{
      setColor("black")
    }
  },[counter])


  

const increment =()=>{
    if (counter < stock) {
        setCounter (counter +1) 
    }
  
}
 const decrement =()=>{
    if (counter < initial) {
     setCounter(counter -1)   
    }
    
 }
 const addToShift = () => {
  if(counter !== 1 ){
      console.log(`${counter} Turnos Agregados`);
  }else{
    console.log(`${counter} Turno Agregado`);
  }

  
};

 
  return (
    <>
    <button onClick={decrement} >-</button>
    <p>{counter}</p>
    <button onClick={increment}>+</button>
    <button onClick={addToShift} style={{color:color}}>Add To Shift</button>
    </>
  )
}

export default ItemCount