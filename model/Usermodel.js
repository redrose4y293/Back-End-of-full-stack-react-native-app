const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please fill all the data"],
        trim: true
    },
    email: {
        type: String,
        require: [true, "please fill all the data"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: [true, "please fill all the data"],
        min: 6,
        max: 20
    }
})