//console.log('server file is running');
// function add(a,b){
//     return a+b;
// }
// var result = add(2,6);
// console.log(result);
// var add =(a,b) => a+b;
// var result = add(123,7);
// console.log(result);
// (function(){
//     console.log('prince is added');
// })();
//function callback(){
   // console.log('now adding is succesully complete');
//}
// const add = function(a,b,callback){
//     var result = a+b ;
// console.log(result);
// callback();
    
// }
// const add = function(a,b,prince){
//     var result = a+b ;
// console.log(result);
// prince();
// }
// add(3,1000023,function(){
//     console.log('add completed')
// });
// add(2,3,() => console.log('add completed'));
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','hi'+user.username + '!\n',()=>{
//     console.log('file is created')
// });
// console.log(os);
// const notes=require('./notes.js');
// var _ = require('lodash');
// console.log('server file is available');
// var age=notes.age;
// var result = notes.addnumber(age+18,10);
// console.log(age);
// console.log(result);

// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter =_.uniq(data);
// console.log(filter);

//import express from 'express'
const express = require('express')
const app = express();
 const db = require('./db');

  const bodyParser = require('body-parser');
  app.use(bodyParser.json()); //req .body
 const Person = require('./models/person');
//const Person = require('../person'); // ✅ goes up to models/, then finds person.js
 const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res)  {
  res.send('Hello World')
})
//app.listen(3000)

app.get('/chicken', (req,res)=>{
    var customized_chicken ={
        name:'tandori chicken',
        size:'10 cm diameter'
    }
    res.send(customized_chicken)
})
app.post('/items', (req,res)=>{
    res.send('data is processing');
})



    


// POST Method to add a Menu Item
app.post('/menu', async (req, res) => {
    try {
        const data = req.body;

        const newMenu = new MenuItem(data);
        const response = await newMenu.save();

        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// GET method to get the Menu Items
app.get('/menu', async (req, res) => {
    try {
        const data = await MenuItem.find();

        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//import the router fieles
const personRoutes = require('./routes/personRoutes'); // ✅
//const personRoutes = require('./models/routes/personRoutes');
app.use('/person', personRoutes);
app.listen(3000, ()=>{
    console.log('listening on port 3000');
}) 
