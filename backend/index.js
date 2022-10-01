const express = require('express');

// Constants
const PORT = 8000;
// App
const app = express();

// API
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Expense Tracker listening on port ${PORT}`);
})