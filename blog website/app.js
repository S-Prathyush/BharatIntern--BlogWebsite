const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');  // Add this line

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Your routes here

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Blog model
const Blog = require('./models/blog');

// Home Route - Show All Blogs
app.get('/', async function(req, res) {
  try {
    const blogs = await Blog.find({});
    res.render('index', { blogs: blogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

// Form to Create a New Blog
app.get('/new', function(req, res) {
  res.render('new');
});

// Handle Form Submission to Create a New Blog
app.post('/new', async function(req, res) {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content // Assuming req.body.content is already HTML formatted
  });

  try {
    await newBlog.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

// Show a Specific Blog Post
app.get('/blogs/:id', async function(req, res) {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    res.render('show', { blog: foundBlog });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

// Search Route - Filter Blogs by Title
app.get('/search', async function(req, res) {
  const searchQuery = req.query.query;
  try {
    const filteredBlogs = await Blog.find({ title: { $regex: searchQuery, $options: 'i' } });
    res.render('filtered', { blogs: filteredBlogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
