const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    targetamount: {
        type: Float,
        required: true,
    },
    savedamount: {
        type: String,
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
            ref: "Goal",
        },
    ],
});

goalSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
