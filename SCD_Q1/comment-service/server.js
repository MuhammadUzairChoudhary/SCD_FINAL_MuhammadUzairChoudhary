const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const { addComment, getComments } = require('./commentController');
const authMiddleware = require('./auth');
const router = express.Router();

router.post('/', authMiddleware, addComment);           // ✅ Protected
router.get('/:blogId', getComments);                    // ❌ Public

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});