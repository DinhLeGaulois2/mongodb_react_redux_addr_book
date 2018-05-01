// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var emailsSchema = new Schema({
    type: { type: String },
    address: { type: String },
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Emails = mongoose.model("Emails", emailsSchema);

module.exports = Emails;