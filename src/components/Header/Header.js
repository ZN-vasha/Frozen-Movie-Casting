import React from 'react';
import './Header.css'
// Import logo
import logo from './Header Images/characters_hero_frozen_winter_a60a1e69.jpg'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <img  src={logo} alt="" />
               <a href="/Movie List">Movie List </a>
               <a href="/Inventory"> Inventory</a>
               <a href="/Others"> Others </a>
           </nav>
           <div className="top-header">
               <h1><span className="span">Frozen Movie</span> Casting </h1>
                <h3>Book Your Favourite Characters </h3>
               <h2>Total Production Budget $300 million</h2>
           </div>
            
           
        </div>
    );
};

export default Header;