const mongoose = require("mongoose");
const { ACCESS, REFRESH, RESET_PASSWORD, VERIFY_EMAIL } = require("../constants/tokenTypes");

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"],
    },
    userId: {
        type: String,
        required: [true, "User ID is required"],
    },
    type: {
        type: String,
        enum: [ACCESS, REFRESH, RESET_PASSWORD, VERIFY_EMAIL],
        required: [true, "Type of token is required"],
    },
    expires: {
        type: Date,
        required: [true, "Expiration date is required"],
    },
    blacklisted: {
        type: Boolean,
        default: false,
    },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;