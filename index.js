const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/', (req, res)=> {     // function and => are the same thing
   res.render('home')
});

//server
app.listen(3000, () => {
   console.log('server started');
});