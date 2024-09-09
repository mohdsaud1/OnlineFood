const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req,res)=>{
  res.render("index.ejs")
});


const Port = 3000;
app.listen(Port,()=>{
  console.log('Run..');
})