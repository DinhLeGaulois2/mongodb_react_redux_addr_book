// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var addressesSchema = new Schema({
    type: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip_code: { type: Number },
    contactsId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Addresses = mongoose.model("Addresses", addressesSchema);

module.exports = Addresses;