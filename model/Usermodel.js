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
    },
    role: {
        type: String,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.Schema("User", userSchema)