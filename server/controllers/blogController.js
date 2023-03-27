// ติดต่อฐานข้อมูล
const slugify = require("slugify");
const Blogs = require("../models/blogs")
const { v4: uuidv4 } = require('uuid');
// บันทึกข้อมูล
exports.create = (req, res) => {
  const { title, content, author } = req.body
  let slug = slugify(title)
// เมื่อ slug เป็นค่าว่างให้ใส่ uuid แทน
  if(!slug)slug=uuidv4();
// validate
  switch(true){
    case !title:
      return res.status(400).json({error: "กรุณาป้อนชื่อบทความ"})
      break;
    case !content:
      return res.status(400).json({error: "กรุณาป้อนเนื้อหาบทความ"})
      break;
    }
 // บันทึกข้อมูล
 Blogs.create({title,content,author,slug},(err,blog) => {
        if(err){
            res.status(400).json({error:"ชื่อบทความซ้ำ"})
        }
        res.json(blog)
    })

}
 //แสดงข้อมูลทั้งหมด
//  .sort({ createdAt:-1 })
exports.getAllblogs= (req,res) => {
  Blogs.find({}).exec((err,blogs) => {
    res.json(blogs)
  })
}

//แสดงข้อมูลตาม slug
exports.getBlog= (req,res) => {
  const {slug} = req.params
  Blogs.findOne({slug}).exec((err,blog) => {
    res.json(blog)
  })
}

//ลบข้อมูลตาม slug
exports.deleteBlog= (req,res) => {
  const {slug} = req.params
  Blogs.findOneAndRemove({slug}).exec((err,blog) => {
    if(err) console.log(err)
    res.json({
      message:"ลบบทความเรียบร้อย"
    })
  })
}

//อัพเดทตาม slug
exports.updateBlog= (req,res) => {
  const {slug} = req.params
  const { title, content, author } = req.body
  Blogs.findOneAndUpdate({slug},{title, content, author},{new:true}).exec((err,blog) => {
    if(err) console.log(err)
    res.json(blog)
  })
}


