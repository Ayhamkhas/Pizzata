import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="navbar__logo">Welcome to Pizzata!</h1>
            
                <ul className="navbar__menu">
                    <li className="navbar__item"><a href="#pizzas" className="navbar__link">Pizzas</a></li>
                    <li className="navbar__item"><a href="#orders" className="navbar__link">Orders</a></li>
                    <li className="navbar__item"><a href="#restaurants" className="navbar__link">Restaurants</a></li>
                    <li className="navbar__item"><a href="#about" className="navbar__link">About Us</a></li>
                </ul>
            </div>
        </nav>
    );
}
