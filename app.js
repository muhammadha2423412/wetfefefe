const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory array to store comments
const comments = [];

app.get('/', (req, res) => {
  // Pass the comments array to the HTML template
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/comments', (req, res) => {
  // Send the comments array as JSON
  res.json(comments);
});

app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  // Store the comment in the in-memory array
  comments.push(comment);
  // Redirect to the home page
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
