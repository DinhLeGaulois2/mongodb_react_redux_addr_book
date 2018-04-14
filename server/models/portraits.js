// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var portraitsSchema = new Schema({
    mime_type: { type: String },
    data: { type: String },
    contactsId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Portraits = mongoose.model("Portraits", portraitsSchema);

module.exports = Portraits;