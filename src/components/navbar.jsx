import React from "react";
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';

export const Navbar = () => {
    return (
      <div className="navbar">
        <div className="Links">
          <Link to="/"> Shop </Link>
          <Link to="/cart">
              <ShoppingCart size={ 32} />
        </Link>
      </div>
   </div>
  );
};












