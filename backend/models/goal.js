const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    trgtamt: {
        type: Float,
        required: true,
    },
    savedamt: {
        type: Float,
        required: true,
    },
    duedate: {
        type: Date,
        required: true,
    },
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
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

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;