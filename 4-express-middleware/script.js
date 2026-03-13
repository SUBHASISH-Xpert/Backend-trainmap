// middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
const express = require('express');
const app = express();

// builtin middleware
// app.use(express.static('public')); 
// middleware - 1
app.use(function(req, res, next) {
    // console.log(`${Date.now()} is a {req.method} request for {req.url}`);
    // console.log(req.headers);
  console.log(1+44);
  console.log("i am use middleware")
  next();
});
// middleware-2
app.use(function(req, res, next) {
  console.log(2+5);
  console.log("i am use middleware-2")
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});