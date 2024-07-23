const express = require('express');
const app = express();
const sayHello = require('./routes/sayHello');

app.use('/',sayHello);

const PORT = process.env.PORT || 80;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});