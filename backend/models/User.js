const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    namme: String,
    email: {type:String, unique:true},
    password: String
})


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;