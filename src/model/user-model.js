const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    sector: {
        type: String,
        required: true,
    }
},
    { timestamps: true });

    module.exports = mongoose.model("User", UserSchema )