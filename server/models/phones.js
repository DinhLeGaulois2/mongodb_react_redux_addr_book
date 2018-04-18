// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var phonesSchema = new Schema({
    type: { type: String },
    number: { type: String },
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Phones = mongoose.model("Phones", phonesSchema);

module.exports = Phones;