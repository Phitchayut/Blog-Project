import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs mb-3 ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            หน้าแรก
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create">
            เขียนบทความ
          </NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
