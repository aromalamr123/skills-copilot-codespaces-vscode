//Create web server
const express = require('express');
const app = express();

//Create a simple web server
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

//Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

//Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('Get comment by id');
});

//Create a route to add a new comment
app.post('/comments', (req, res) => {
    res.send('Add a new comment');
});

//Create a route to update a comment by id
app.put('/comments/:id', (req, res) => {
    res.send('Update comment by id');
});

//Create a route to delete a comment by id
app.delete('/comments/:id', (req, res) => {
    res.send('Delete comment by id');
});