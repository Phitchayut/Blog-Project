import React,{useState} from "react";
import Navbar from './Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'

const FormComponent = () => {
  const [state,setState] = useState({
    title:"",
    content:"",
    author:""
  })
  const {title,content,author} = state
  const inputValue=name=>e=>{
    setState({...state,[name]:e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_APP_API}/create`,{title,content,author})
    .then(response=>{
      Swal.fire('สำเร็จ!','บันทึกข้อมูลเรียบร้อย!','success',)
      setState({...state,title:"",content:"",author:""})
    })
    .catch(err=>{
      Swal.fire('ไม่สำเร็จ!',err.response.data.error,'error')
    })
  }
  return (
    <div className="container p-5">
      <Navbar />
      <h1>เขียนบทความ</h1>
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
          <input type="submit"className="btn btn-success" value="บันทึก" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
