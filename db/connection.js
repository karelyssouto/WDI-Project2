const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/your-data-base-name").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;
