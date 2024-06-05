const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./models/User.js')

const jwt = require('jsonwebtoken')

const secretSalt = bcrypt.genSaltSync(6);
const jwtSecret = "notAGoodToken"

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

//database
mongoose.connect(process.env.MONGO_URL)



app.get('/test', (req, res) => {
    res.json("hello from api")
    console.log("client req")
})


app.post('/registerUser', async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, secretSalt)
        });
        res.json(userDoc)
        
    } catch (error) {
        res.status(422).json(error);
    }
});



app.post('/loginuser', async (req, res) => {
    const {email, password} = req.body;

    try {
       const userDoc = await User.findOne({email:email})
       if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        }else{
            
            res.json("not okay!")
        }
       }else{
        res.status(422).json("user DNE")
       }
        
    } catch (error) {
        res.status(422).json(error);
    }


})

app.listen(3000)