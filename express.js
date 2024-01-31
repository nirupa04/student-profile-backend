const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const port = 5001
app.use(bodyparser.json());

app.use(cors())
mongo.connect("mongodb://localhost:27017/tomDB")
.then((()=>{console.log("connected to DB")}))

const userSchema= new mongo.Schema({
  name:String,
  email:String,
  phone:Number,
  linkedin:String,
  github:String,
  image:String
})

const User = mongo.model('Bb',userSchema)

app.get('https://studentprofileshowcase.onrender.com',(req,res)=>{
    User.find()
    .then((users)=>{
      res.send(users)
    })
})

app.post('https://studentprofileshowcase.onrender.com',(req,res)=>{
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

 

  
 
