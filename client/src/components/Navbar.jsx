import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs mb-3 ">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            หน้าแรก
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">
            เขียนบทความ
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
