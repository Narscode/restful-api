const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());

// Use routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
