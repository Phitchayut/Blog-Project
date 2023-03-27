const express = require("express")
const router = express.Router()
const {create,getAllblogs,getBlog,deleteBlog,updateBlog} = require("../controllers/blogController")

router.post('/create',create)
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',getBlog)
router.delete('/blog/:slug',deleteBlog)
router.put('/blog/:slug',updateBlog)

module.exports=router