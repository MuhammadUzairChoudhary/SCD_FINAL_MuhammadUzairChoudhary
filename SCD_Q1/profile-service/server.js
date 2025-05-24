const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;
const { updateProfile, getProfile } = require('./profileController');
const authMiddleware = require('./auth');
const router = express.Router();

router.post('/', authMiddleware, updateProfile);        // ✅ Protected
router.get('/', authMiddleware, getProfile);            // ✅ Protected

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});