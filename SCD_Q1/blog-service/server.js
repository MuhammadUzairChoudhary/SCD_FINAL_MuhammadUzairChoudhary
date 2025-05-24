const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const { createBlog, getBlogs, incrementViews } = require('./blogController');
const authMiddleware = require('./auth');
const router = express.Router();

router.post('/', authMiddleware, createBlog);           // ✅ Protected
router.get('/', getBlogs);                              // ❌ Public
router.post('/view/:blogId', incrementViews);           // ❌ Public

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});