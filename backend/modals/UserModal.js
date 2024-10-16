// const mongoose=require("mongoose")


// const UserSchema=mongoose.Schema({
//     email:{type:"String",required:true},
//     pass:{type:"String",required:true},
//     fingerprint: { type: "String", required: true },
   
// },{timestamps:true}
// )

// const User=mongoose.model("User",UserSchema);

// module.exports=User;

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },  // Email should remain unique
    pass: { type: String, required: true },
    fingerprint: { type: String, required: false }, // Optional if fingerprint authentication isn't always used
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
