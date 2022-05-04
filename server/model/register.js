const mongoose = require('mongoose');



const RegisterSchema = new mongoose.Schema({
    full_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    
})
const Register = new mongoose.model("Register", RegisterSchema);

module.exports = Register;