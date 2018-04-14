// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var contactsSchema = new Schema({   
    name: { type: String },
    company: { type: String },
    title: { type: String },
    groupsId: {
        type: Schema.Types.ObjectId,
        ref: "Groups"
    }
});

var Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;