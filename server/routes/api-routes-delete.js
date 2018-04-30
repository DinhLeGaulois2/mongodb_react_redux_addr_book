var objectId = require('mongodb').ObjectId

var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');

module.exports = function (app) {
    app.delete("/api/delete/contact/:id", (req, res, next) => {
        Contacts.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/group/:id", (req, res, next) => {
        Groups.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/address/:id", (req, res, next) => {
        Addresses.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/phone/:id", (req, res, next) => {
        Phones.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/email/:id", (req, res, next) => {
        Emails.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/portrait/:id", (req, res, next) => {
        Portraits.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/thumbnail/:id", (req, res, next) => {
        Thumbnails.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })

    app.delete("/api/delete/twitter/:id", (req, res, next) => {
        Twitters.remove({ "_id": objectId(req.params.id) }, (err, db) => {
            if (err) throw next(err)
            res.status(200).json("Delete: Success!")
        })
    })
}