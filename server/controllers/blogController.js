// ติดต่อฐานข้อมูล
const slugify = require("slugify");
const Blogs = require("../models/blogs")
// บันทึกข้อมูล
exports.create = (req, res) => {
  const { title, content, author } = req.body
  const slug = slugify(title)
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
exports.getAllblogs= (req,res) => {
  Blogs.find({}).sort({ createdAt:-1 }).exec((err,blogs) => {
    res.json(blogs)
  })
}


