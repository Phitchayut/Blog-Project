import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import Swal from 'sweetalert2'
import {authenticate} from "../services/authorize"
import {withRouter} from "react-router-dom"

const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;
  const inputValue = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_APP_API}/login`,{username,password})
    .then(response=>{
      authenticate(response,()=>props.history.push("./create"))
    })
    .catch(err=>{
      Swal.fire('ไม่สำเร็จ!',err.response.data.error,'error')
    })
  };
  return (
    <>
      <div className="container p-5">
        <Navbar />
        <h1 className="text-center">เข้าสู่ระบบ</h1>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={inputValue("username")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={inputValue("password")}
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(Login);
