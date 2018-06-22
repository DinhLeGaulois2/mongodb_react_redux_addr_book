var objectId = require('mongodb').ObjectId

var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');


const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {
    app.put("/api/update/contact/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.name != undefined) obj.name = req.body.name
        if (req.body.company != undefined) obj.company = req.body.company
        if (req.body.title != undefined) obj.title = req.body.title
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/group/:id", requireAuth, (req, res, next) => {
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: { name: req.body.name } }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/address/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.type != undefined) obj.type = req.body.type
        if (req.body.street != undefined) obj.street = req.body.street
        if (req.body.city != undefined) obj.city = req.body.city
        if (req.body.state != undefined) obj.state = req.body.state
        if (req.body.zip_code != undefined) obj.zip_code = req.body.zip_code
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/phone/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.type != undefined) obj.type = req.body.type
        if (req.body.number != undefined) obj.number = req.body.number
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/email/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.type != undefined) obj.type = req.body.type
        if (req.body.address != undefined) obj.address = req.body.address
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/portrait/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.mime_type != undefined) obj.mime_type = req.body.mime_type
        if (req.body.data != undefined) obj.data = req.body.data
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/thumbnail/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.mime_type != undefined) obj.mime_type = req.body.mime_type
        if (req.body.data != undefined) obj.data = req.body.data
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })

    app.put("/api/update/twitter/:id", requireAuth, (req, res, next) => {
        let obj = {}
        if (req.body.name != undefined) obj.name = req.body.name
        if (req.body.location != undefined) obj.location = req.body.location
        if (req.body.web != undefined) obj.web = req.body.web
        if (req.body.bio != undefined) obj.bio = req.body.bio
        Contacts.updateOne({ "_id": objectId(req.params.id) },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
}