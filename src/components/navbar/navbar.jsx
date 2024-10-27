import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from '../../assets/carrusel/logo.png';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <div className="logoHeader">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
};
