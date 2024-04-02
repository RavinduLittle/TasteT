import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './component/Footer/Footer'
import LoginAcc from './component/LoginAcc/LoginAcc'
import PlOrder from './pages/PlOrder/PlOrder'



const App = () => {
const [showLogin,setShowLogin]=useState(false)

  return (

    <>
    {showLogin?<LoginAcc setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order'element={<PlOrder/>}/>

    </Routes>
    </div>
    <Footer />
    </>
   
  )
}

export default App
