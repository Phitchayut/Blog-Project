import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import App from "./App"
import FormComponent from "./components/FormComponent"

const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/create" element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoute