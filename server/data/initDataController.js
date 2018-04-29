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
    Contacts.find(data_contacts[0], (err, response) => {
        if (err) throw next(err)
        // already initiated: do nothing, start the server
        if (response.length > 0) callback()
        else {
            Contacts.insertMany(data_contacts, (err, response) => {
                if (err) throw next(err)
                let ind = 0
                const listContact = (list) => {
                    if (list.length) {
                        let aE = list.shift()
                        let adr = data_addresses[ind]
                        Addresses.create({
                            type: adr.type,
                            street: adr.street,
                            city: adr.city,
                            state: adr.state,
                            zip_code: adr.zip_code,
                            contactsId: aE._id
                        }, (err, response) => {
                            if (err) throw next(err)
                            ind++;
                            listContact(list)
                        })
                    }
                    else
                        callback()
                }
                listContact([...response])
            })
        }
    })
}

module.exports = initDataController