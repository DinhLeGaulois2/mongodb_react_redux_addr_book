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
    app.post("/api/add/address", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            type: obj.data.type,
            street: obj.data.street,
            city: obj.data.city,
            state: obj.data.state,
            zip_code: obj.data.zip_code,
            contactId: objectId(obj.contactId)
        }
        Addresses.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Addresses.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        })
    })

    app.post("/api/add/all/contacts", requireAuth, (req, res, next) => {
        Contacts.insertMany(data2Insert, (err, db) => {
            if (err) throw next(err)
            res.status(200).json({ msg: "Insertion: Success!" })
        })
    })

    app.post("/api/add/contact", requireAuth, (req, res, next) => {
        let obj = req.body
        Contacts.find(obj, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Contacts.create(obj, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/email", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            type: obj.data.type,
            address: obj.data.address,
            contactId: objectId(obj.contactId)
        }
        Emails.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Emails.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/group", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            name: obj.data.name,
            contactId: objectId(obj.contactId)
        }
        Groups.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Groups.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/phone", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            type: obj.data.type,
            number: obj.data.number,
            contactId: objectId(obj.contactId)
        }
        Phones.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Phones.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/portrait", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            mime_type: obj.data.mime_type,
            data: obj.data.data,
            contactId: objectId(obj.contactId)
        }
        Portraits.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Portraits.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/thumbnail", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            mime_type: obj.data.mime_type,
            data: obj.data.data,
            contactId: objectId(obj.contactId)
        }
        Thumbnails.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Thumbnails.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })

    app.post("/api/add/twitter", requireAuth, (req, res, next) => {
        let obj = req.body
        let data2Insert = {
            name: obj.data.name,
            location: obj.data.location,
            web: obj.data.web,
            bio: obj.data.bio,
            contactId: objectId(obj.contactId)
        }
        Twitter.find(data2Insert, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Twitter.create(data2Insert, (err, db) => {
                    if (err) throw next(err)
                    res.status(200).json("Insertion: Success!")
                })
            }
            else res.status(200).json(db)
        }
        )
    })
}