const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const port = 5001
app.use(bodyparser.json());

app.use(cors())
mongo.connect("mongodb+srv://nirupakrishnan2003:5eqeMuBdqxuzHrT0@cluster0.nd2aizp.mongodb.net/studentdata")
.then((()=>{console.log("connected to DB")}))
.catch((err)=>console.log(err));

const userSchema= new mongo.Schema({
  name:String,
  email:String,
  phone:Number,
  linkedin:String,
  github:String,
  image:String
})

const User = mongo.model('Bb',userSchema)

app.get('https://studentprofileshowcase.onrender.com/users',(req,res)=>{
    User.find()
    .then((users)=>{
      res.send(users)
    })
})

app.post('/users',(req,res)=>{
  const user  = new User(req.body);
  user.save()
  .then(()=>{
    res.send(user);
    console.log(user,"Added User");
  })
})

app.listen(port, () => {
    console.log(`server running`)
  })

 

  
 
