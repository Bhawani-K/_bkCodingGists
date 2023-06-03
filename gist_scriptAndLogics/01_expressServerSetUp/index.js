const express = require('express');

const app = express();
const port = 3000;

// using HTTP Get method, the client makes a requests the root url and gets the respond with a string of "HelloWorld!.."
app.get('/', (req,res)=> res.send('Hello World!..'))
app.get('/signUp', (req,res)=> res.send('SignUp..'))

app.listen(port, ()=>console.log(`Server started at port ${port}`))