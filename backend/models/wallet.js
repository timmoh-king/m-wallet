const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 10,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    targetamount: {
        type: Number,
        required: true,
    },
    savedamount: {
        type: Number,
    },
    duedate: {
        type: Date,
        required: true,
    },
    user: String,
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    goal: String,
    goal: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goal',
        }
    ],
});

walletSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
