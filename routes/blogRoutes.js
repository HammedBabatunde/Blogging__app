const express = require('express')
// const Blog = require('../models/blog');
const blogController = require('../controllers/blogController')

const router = express.Router();
  
router.get('/', blogController.blog_index)
    // Blog.find().sort({ createdAt: -1 })
    //   .then(result => {
    //     res.render('index', { blogs: result, title: 'All blogs' });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });


router.get('/create', blogController.blog_create_get)
// router.get('/create', (req, res) => {
//     res.render('create', { title: 'Create a new blog' });
//   });
  
router.post('/', blogController.blog_create_post)
// router.post('/', (req, res) => {
//     // console.log(req.body);
//     const blog = new Blog(req.body);
  
//     blog.save()
//       .then(result => {
//         res.redirect('/blogs');
//       })
//       .catch(err => {
//         console.log(err);
//       });
// });

router.get('/:id', blogController.blog_details)
// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//       .then(result => {
//         res.render('details', { blog: result, title: 'Blog Details' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
// });


router.delete('/:id', blogController.blog_delete)
// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
    
//     Blog.findByIdAndDelete(id)
//       .then(result => {
//         res.json({ redirect: '/blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
// });

module.exports = router