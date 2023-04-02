import React from "react";
import { Link, withRouter } from "react-router-dom";
import {getUser} from "../services/authorize";

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
        {
        !getUser() && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              เข้าสู่ระบบ
            </Link>
          </li>
        )
        }
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
