import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const Detail=(props)=>{
const [detail,setDetail] = useState('')
useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API}/blog/${props.match.params.slug}`)
    .then(response =>{
        setDetail(response.data)
    })
    .catch((err) => alert(err))
}, [])

  return (
    <div className="container p-5">
        <Navbar />
        <h1>{detail.title}</h1>
        <p>{detail.content}</p>
        <p className="text-muted">ผู้เขียน: {detail.author} ,
         เผยแพร่: {new Date(detail.createdAt).toLocaleString()}</p>
    </div>
  )
}

export default Detail