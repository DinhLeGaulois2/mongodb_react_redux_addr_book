import axios from "axios"

import cst from '../../constants/addr_book/cst'

const addr_book_action = {
    aContact: "",

    addAddress: (data) => {
        return dispatch => {
            axios.post("/api/add/address", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_ADDR_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addContact: (data) => {
        return dispatch => {
            axios.post("/api/add/contact", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_CONTACT_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addEmail: (data) => {
        return dispatch => {
            axios.post("/api/add/email", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_EMAIL_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addGroup: (data) => {
        return dispatch => {
            axios.post("/api/add/group", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_GROUP_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addPhone: (data) => {
        return dispatch => {
            axios.post("/api/add/phone", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_PHONE_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addPortrait: (data) => {
        return dispatch => {
            axios.post("/api/add/portrait", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_THUMBNAIL_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addThumbnail: (data) => {
        return dispatch => {
            axios.post("/api/add/thumbnail", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_THUMBNAIL_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    addTwitter: (data) => {
        return dispatch => {
            axios.post("/api/add/twitter", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_TWITTER_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    selectAContact: (id) => {
        return dispatch => {
            addr_book_action.aContact = id
            dispatch({
                type: cst.SELECT_A_CONTACT_SUCCESS,
                payload: id
            })
        }
    },

    selectAContact4Add: (data) => {
        return dispatch => {
            addr_book_action.aContact = data.selectAContact
            dispatch({
                type: cst.SELECT_A_CONTACT_SUCCESS,
                payload: data.selectAContact
            })
        }
    },

    showContacts: () => {
        return dispatch => {
            axios.get("/api/get/contacts")
                .then(response => {
                    dispatch({
                        type: cst.LIST_CONTACTS_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => alert(err))
        }
    },

    showGroups: () => {
        return dispatch => {
            axios.get("/api/get/groups")
                .then(response => {
                    dispatch({
                        type: cst.LIST_GROUPS_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showAddrByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/addresse/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_ADDR_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showPhoneByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/phone/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_PHONE_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showEmailByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/email/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_EMAIL_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showGroupByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/group/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_GROUP_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showTwitterByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/twitter/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_TWITTER_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showThumbnailByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/thumbnail/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_THUMBNAIL_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    showPortraitByContact: () => {
        if (addr_book_action.aContact.length > 0) {
            return dispatch => {
                axios.get("/api/get/portrait/contact/" + addr_book_action.aContact)
                    .then(response => {
                        dispatch({
                            type: cst.LIST_PORTRAIT_BY_CONTACT_ID_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }
        }
    },

    deleteAddress: (id) => {
        return dispatch => {
            axios.delete("/api/delete/address/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_ADDR_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteContact: (id) => {
        return dispatch => {
            axios.delete("/api/delete/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_CONTACT_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteEmail: (id) => {
        return dispatch => {
            axios.delete("/api/delete/email/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_EMAIL_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteGroup: (id) => {
        return dispatch => {
            axios.delete("/api/delete/group/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_GROUP_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deletePhone: (id) => {
        return dispatch => {
            axios.delete("/api/delete/phone/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_PHONE_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deletePortrait: (id) => {
        return dispatch => {
            axios.delete("/api/delete/portrait/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_PORTRAIT_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteThumbnail: (id) => {
        return dispatch => {
            axios.delete("/api/delete/thumbnail/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_THUMBNAIL_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteTwitter: (id) => {
        return dispatch => {
            axios.delete("/api/delete/twitter/" + id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_TWITTER_SUCCESS,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateAddress: (data) => {
        return dispatch => {
            axios.put("/api/update/address/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_ADDR_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateContact: (data) => {
        return dispatch => {
            axios.put("/api/update/contact/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_CONTACT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateEmail: (data) => {
        return dispatch => {
            axios.put("/api/update/email/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_EMAIL_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateGroup: (data) => {
        return dispatch => {
            axios.put("/api/update/group/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_GROUP_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updatePhone: (data) => {
        return dispatch => {
            axios.put("/api/update/phone/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_PHONE_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updatePortrait: (data) => {
        return dispatch => {
            axios.put("/api/update/portrait/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_PORTRAIT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateThumbnail: (data) => {
        return dispatch => {
            axios.put("/api/update/thumbnail/", data)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_THUMBNAIL_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateTwitter: (id) => {
        return dispatch => {
            axios.put("/api/update/twitter/" + id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_TWITTER_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (mainStatus.length) {
                addr_book_action.aContact = {}
                axios.get("/api/get/contacts")
                    .then(response => {                        
                        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                        if(mainStatus == cst.MENU_ADD)
                            console.log("Contact, data: " + JSON.stringify(response, null, 5))
                        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                        dispatch({ type: mainStatus })
                        dispatch({
                            type: cst.LIST_CONTACTS_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(err => { alert(err) })
            }

            if (actionStatus.length) {// no change on Main page ...
                dispatch({ type: actionStatus })
            }
        }
    }
}

export default addr_book_action