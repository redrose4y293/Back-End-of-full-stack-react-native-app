const mongoose = require("mongoose")

const connectdb = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected Complete`)
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectdb;