import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Navbar from "./components/Navbar";
import {Link} from "react-router-dom"
import Swal from "sweetalert2"

function App() {
  const [blogs, setBlogs] = useState([]);
  const getAllblogs = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getAllblogs();
  }, []);

  const confirmDelete = (slug) => {
    Swal.fire({
      title: 'คุณต้องการลบข้อมูลใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่!',
      cancelButtonText: 'ไม่!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(slug)
      }
    })
  }
  const deleteBlog = (slug) => {
    axios.delete(`${import.meta.env.VITE_APP_API}/blog/${slug}`)
    .then(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
      getAllblogs();
    })
    .catch((err) => alert(err))
  }
  return (
    <div className="container p-5">
      <Navbar />
      {blogs.map((blog, index) => (
        <div className="row" key={index}>
          <div className="col pt-3 pb-2">
            <Link to={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p>{blog.content.substring(0,180)}</p>
            <p className="text-muted">ผู้เขียน: {blog.author} ,
            เผยแพร่: {new Date(blog.createdAt).toLocaleString()}</p>
            <Link to={`/blog/edit/${blog.slug}`} className="btn btn-info"> 
            Update
            </Link>&nbsp;&nbsp;
            <button onClick={()=> confirmDelete(blog.slug)} className="btn btn-danger">
            Delete
            </button>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
