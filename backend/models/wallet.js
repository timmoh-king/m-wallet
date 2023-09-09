const mongoose = require("mongoose");
const { format } = require("date-fns");

const walletSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
    },
    targetamount: {
        type: Number,
        required: true,
    },
    savedamount: {
        type: Number,
    },
    amount: {
        type: Number,
        default: 0
    },
    duedate: {
        type: Date,
        required: true,
        get: (val) => format(val, "dd/MM/yy"),
        set: (val) => new Date(val),
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
