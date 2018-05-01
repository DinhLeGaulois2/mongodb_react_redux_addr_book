// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
    name: { type: String },
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;