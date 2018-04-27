var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');

const data_addresses = require('../data/data_addresses')

const data_contacts = require('../data/data_contacts')

const initDataController = (callback) => {
    Contacts.insertMany(data_contacts, (err, db) => {
        if (err) throw next(err)
        res.status(200).json({ msg: "Insertion: Success!" })
    })
}

module.exports = initDataController