import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

import Contacts from './Components/Contacts/Contacts'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Salud Ar"} welcome={"Transforma tu vida, cuidá tu salud"}/>}/>
     <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
     <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
     <Route path='/contacts'element={<Contacts/>} />
  </Routes>
</BrowserRouter>
  )
}

export default App