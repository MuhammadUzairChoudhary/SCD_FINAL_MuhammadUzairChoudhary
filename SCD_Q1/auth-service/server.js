const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const auth = require('./auth')


router.post('/register', register);
router.post('/login', login);

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});