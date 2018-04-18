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
        Contacts.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/group/:id", (req, res, next) => {
        Groups.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/address/:id", (req, res, next) => {
        Addresses.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/phone/:id", (req, res, next) => {
        Phones.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/email/:id", (req, res, next) => {
        Emails.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/portrait/:id", (req, res, next) => {
        Portraits.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/thumbnail/:id", (req, res, next) => {
        Thumbnails.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/twitter/:id", (req, res, next) => {
        Twitters.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
}