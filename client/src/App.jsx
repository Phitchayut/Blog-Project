import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Navbar from "./components/Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);
  const getAllblogs = () => {
    axios
      .get("http://localhost:5500/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getAllblogs();
  }, []);
  return (
    <div className="container p-5">
      <Navbar />
      {blogs.map((blog, index) => (
        <div className="row" key={index}>
          <div className="col pt-3 pb-2">
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0,180)}</p>
            <p className="text-muted">ผู้เขียน: {blog.author} ,
            เผยแพร่: {new Date(blog.createdAt).toLocaleString()}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
