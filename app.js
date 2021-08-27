const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './src/public');
const port = process.env.PORT || '3000';

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is runing in the port : ${port}`)
})

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, './src/view/index.html'))
})
app.get('/register', (req, res)=> {
    res.sendFile(path.join(__dirname, './src/view/register.html'))
})
app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, './src/view/login.html'))
})
app.get('/product', (req, res)=> {
    res.sendFile(path.join(__dirname, './src/view/product.html'))
})
