// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var thumbnailsSchema = new Schema({
    mime_type: { type: String },
    data: { type: String },
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }
});

var Thumbnails = mongoose.model("Thumbnails", thumbnailsSchema);

module.exports = Thumbnails;