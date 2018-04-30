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
    app.get("/api/get/contacts", (req, res, next) => {
        Contacts.find()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    })

    app.get("/api/get/phones", (req, res, next) => {
        Phones.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/phone/contact/:id", (req, res, next) => {
        Phones.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/addresses", (req, res, next) => {
        Addresses.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/addresse/contact/:id", (req, res, next) => {
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("/api/get/addresse/contact/, start, id: " + req.params.id)
        Addresses.find()
            .then(data => {

                //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                console.log("/api/get/addresse/contact/, from database: " + JSON.stringify(data, null, 5))
                res.status(200).json(data)
            })
            .catch(next)
    })

    app.get("/api/get/groups", (req, res, next) => {
        Groups.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/group/contact/:id", (req, res, next) => {
        Groups.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/twitter", (req, res, next) => {
        Twitter.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/twitter/contact/:id", (req, res, next) => {
        Twitter.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/thumbnails", (req, res, next) => {
        Thumbnails.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/thumbnail/contact/:id", (req, res, next) => {
        Thumbnails.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/portraits", (req, res, next) => {
        Portraits.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/portrait/contact/:id", (req, res, next) => {
        Portraits.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/emails", (req, res, next) => {
        Emails.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/email/contact/:id", (req, res, next) => {
        Emails.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })
}