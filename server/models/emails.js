// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var emailsSchema = new Schema({
    type: { type: String },
    address: { type: String },
    contactsId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Emails = mongoose.model("Emails", emailsSchema);

module.exports = Emails;