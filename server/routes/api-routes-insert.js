var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');

module.exports = function (app) { 
    app.post("/api/add/address", (req, res, next) => {
        Addresses.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Addresses.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/all/contacts", (req, res, next) => {
        Contacts.insertMany(req.body, (err, db) => {
            if (err) throw next(err)
            res.status(200).json({ msg: "Insertion: Success!" })
        })
    })    

    app.post("/api/add/contact", (req, res, next) => {
        Contacts.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Contacts.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/email", (req, res, next) => {
        Emails.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Emails.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/group", (req, res, next) => {
        Groups.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Groups.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/phone", (req, res, next) => {
        Phones.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Phones.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/portrait", (req, res, next) => {
        Portraits.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Portraits.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/thumbnail", (req, res, next) => {
        Thumbnails.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Thumbnails.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })

    app.post("/api/add/twitter", (req, res, next) => {
        Twitters.find(req.body, (err, db) => {
                if (err) throw next(err)
                if (db.length == 0) {
                    Twitters.create(req.body, (err, db) => {
                        if (err) throw next(err)
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })
}