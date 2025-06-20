require('dotenv').config();
const express = require('express');
const app = express();
const blackboxRoute = require('./routes/blackbox');

const PORT = process.env.PORT || 5404;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use('/blackbox', blackboxRoute);

app.listen(PORT, () => {
  console.log(`Blackbox API running at http://localhost:${PORT}/blackbox`);
});
