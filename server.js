const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from 'public' folder at /public URL
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve HTML from outside public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
