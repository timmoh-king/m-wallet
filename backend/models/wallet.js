const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    targetamount: {
        type: Int32Array,
        required: true,
    },
    savedamount: {
        type: Int32Array,
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
    goaltitle: String,
    goaltitle: [
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
