import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../../public/assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]=useState("home");

    const {getTotalCartAmount}=useContext(StoreContext);
 
  return (
    <div className='navbar'>
  <Link to='/' > <h1 className='logo'>TasteTrial</h1></Link>
   <ul className="navbar-menu">
     <Link to='/' onClick={()=>setMenu("Home")} className={menu==="home"?"active":""}>Home</Link>
     <a href='#menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
     <a href='#special' onClick={()=>setMenu("Special")} className={menu==="Special"?"active":""}>Special</a>
     <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
     <a href='#about_us' onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</a>
   </ul>
    <div className="navbar-icon">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
      <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>   
            <div className={ getTotalCartAmount()===0?"":"dot"}> </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar;
