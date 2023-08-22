const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 5,
    },
    contact: {
        type: number,
        required: true,
        minlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    wallets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
        },
    ],
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;