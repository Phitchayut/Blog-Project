import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";

const Edit = (props) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
    slug: "",
  });
  const { title, content, author, slug } = state;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/blog/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, author, slug } = response.data;
        setState({ ...state, title, content, author, slug });
      })
      .catch((err) => alert(err));
  }, []);

  const showUpdateForm = () => (
    <form onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          ชื่อบทความ
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={inputValue("title")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          รายละเอียด
        </label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={inputValue("content")}
          rows={3}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          ชื่อผู้เขียน
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={inputValue("author")}
        />
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-success" value="อัพเดท" />
      </div>
    </form>
  );

  const inputValue = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };
    const submitForm = (e) => {
      e.preventDefault();
      axios.put(`${import.meta.env.VITE_APP_API}/blog/${slug}`,{title,content,author})
      .then(response=>{
        Swal.fire('สำเร็จ!','แก้ไขข้อมูลเรียบร้อย!','success')
        const {title,content,author,slug} = response.data
        setState({...state, title, content, author, slug})
      })
      .catch(err=>{
        Swal.fire('ไม่สำเร็จ!',err.response.data.error,'error')
      })
    };
  return (
    <div className="container p-5">
      <Navbar />
      <h1>แก้ไขบทความ</h1>
      {showUpdateForm()}
    </div>
  );
};

export default Edit;
