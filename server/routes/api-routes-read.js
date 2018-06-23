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
    app.get("/api/get/contacts", requireAuth, (req, res, next) => {
        Contacts.find()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    })

    app.get("/api/get/contact/:id", requireAuth, (req, res, next) => {
        const contactId = objectId(req.params.id);
        let result = {}
        Contacts.find({ _id: contactId })
            .then(data => {
                result.contact = data[0];
                Portraits.find({ "contactId": contactId })
                    .then(data => {
                        if (data.length) result.portraits = data;
                        Emails.find({ "contactId": contactId })
                            .then(data => {
                                if (data.length) result.emails = data;
                                Thumbnails.find({ "contactId": contactId })
                                    .then(data => {
                                        if (data.length) result.thumbnails = data;
                                        Twitter.find({ "contactId": contactId })
                                            .then(data => {
                                                if (data.length) result.twitters = data;
                                                Groups.find({ "contactId": contactId })
                                                    .then(data => {
                                                        if (data.length) result.groups = data;
                                                        Addresses.find({ "contactId": contactId })
                                                            .then(data => {
                                                                if (data.length) result.addresses = data;
                                                                Phones.find({ "contactId": contactId })
                                                                    .then(data => {
                                                                        if (data.length) result.phones = data;
                                                                        res.status(200).json(result)
                                                                    }).catch(next)
                                                            }).catch(next)
                                                    }).catch(next)
                                            }).catch(next)
                                    }).catch(next)
                            }).catch(next)
                    }).catch(next)
            }).catch(next)
    })

    app.get("/api/get/phones", requireAuth, (req, res, next) => {
        Phones.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/phone/contact/:id", requireAuth, (req, res, next) => {
        Phones.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/addresses", requireAuth, (req, res, next) => {
        Addresses.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/addresse/contact/:id", requireAuth, (req, res, next) => {
        Addresses.find({ "contactId": objectId(req.params.id) })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    })

    app.get("/api/get/groups", requireAuth, (req, res, next) => {
        Groups.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/group/contact/:id", requireAuth, (req, res, next) => {
        Groups.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/twitter", requireAuth, (req, res, next) => {
        Twitter.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/twitter/contact/:id", requireAuth, (req, res, next) => {
        Twitter.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/thumbnails", requireAuth, (req, res, next) => {
        Thumbnails.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/thumbnail/contact/:id", requireAuth, (req, res, next) => {
        Thumbnails.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/portraits", requireAuth, (req, res, next) => {
        Portraits.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/portrait/contact/:id", requireAuth, (req, res, next) => {
        Portraits.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/emails", requireAuth, (req, res, next) => {
        Emails.find()
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/email/contact/:id", requireAuth, (req, res, next) => {
        Emails.find({ "contactId": objectId(req.params.id) })
            .then(data => res.status(200).json(data))
            .catch(next)
    })
}