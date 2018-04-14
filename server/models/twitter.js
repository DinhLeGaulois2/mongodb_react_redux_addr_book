// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var twitterSchema = new Schema({
    name: { type: String },
    location: { type: String },
    web: { type: String },
    bio: { type: String },
    contactsId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Twitter = mongoose.model("Twitter", twitterSchema);

module.exports = Twitter;