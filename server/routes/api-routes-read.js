var Addresses = require('../models/addresses.js');
var Contacts = require('../models/contacts.js');
var Emails = require('../models/emails.js');
var Groups = require('../models/groups.js');
var Phones = require('../models/phones.js');
var Portraits = require('../models/portraits.js');
var Thumbnails = require('../models/thumbnails.js');
var Twitter = require('../models/twitter.js');

module.exports = function (app) {
    app.get("/api/get/contacts", (req, res) => {
        Contacts.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/phones", (req, res) => {
        Phones.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/addresses", (req, res) => {
        Addresses.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/groups", (req, res) => {
        Groups.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/twitter", (req, res) => {
        Twitter.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/thumbnails", (req, res) => {
        Thumbnails.find().then(data => res.status(200).json(data))
        .catch(next)
    })
    
    app.get("/api/get/portraits", (req, res) => {
        Portraits.find().then(data => res.status(200).json(data))
        .catch(next)
    })
}