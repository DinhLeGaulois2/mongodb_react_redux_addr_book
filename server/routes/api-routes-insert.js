var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');

module.exports = function (app) {
    app.post("/api/add/contacts", (req, res) => {
        Contacts.insertMany(req.body, (err, db) => {
            if (err) throw err
            res.status(200).json({ msg: "Insertion: Success!" })
        })
    })

    app.post("/api/add/phone", (req, res) => {
        Phones.find(
            {
                type: req.body.type,
                number: req.body.number,
                contactId: req.body.contactId
            }, (err, db) => {
                if (err) throw err
                if (db.length == 0) {
                    Phones.create(req.body, (err, db) => {
                        if (err) throw err
                        res.status(200).json("Insertion: Success!")
                    })
                }
                else res.status(200).json(db)
            }
        )
    })
}