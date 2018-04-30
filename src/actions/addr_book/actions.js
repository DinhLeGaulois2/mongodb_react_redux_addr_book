import axios from "axios"

import cst from '../../constants/addr_book/cst'

const addr_book_action = {
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
            dispatch({
                type: cst.SELECT_A_CONTACT_SUCCESS,
                payload: id
            })
        }
    },

    showContacts: () => {
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("showContacts, sdfsffd ")
        return dispatch => {
            //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
            console.log("showContacts, data: 45654")// + JSON.stringify(response, null, 5))
            axios.get("/api/get/contacts")
                .then(response => {
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("showContacts, data: ")// + JSON.stringify(response, null, 5))
                    // dispatch({
                    //     type: cst.LIST_CONTACTS_SUCCESS,
                    //     payload: response.data
                    // })
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

    showAddrByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/addresse/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_ADDR_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showPhoneByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/phone/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_PHONE_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showEmailByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/email/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_EMAIL_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showGroupByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/group/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_GROUP_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showTwitterByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/twitter/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_TWITTER_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showThumbnailByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/thumbnail/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_THUMBNAIL_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showPortraitByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/portrait/contact/" + id)
                .then(response => {
                    dispatch({
                        type: cst.LIST_PORTRAIT_BY_CONTACT_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
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
            //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
            console.log("Delete Contact, id: " + id)
            axios.delete("/api/delete/contact/" + id)
                .then(response => {
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("Delete Contact: Success!")
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
        return (dispatch, getState) => {
            axios.get("/api/get/contacts")
                .then(response => {
                    dispatch({
                        type: cst.LIST_CONTACTS_SUCCESS,
                        payload: response.data
                    })


                    if (actionStatus.length > 0) {
                        dispatch({ type: cst.SELECT_CONTACT_NULL })
                        if (actionStatus != cst.LIST_CONTACTS) {
                            let st = getState().addrbook.selectedContact
                            if (st.menuStatus == cst.MENU_DISPLAY)
                                switch (actionStatus) {
                                    case cst.LIST_ADDRESSES: return addr_book_action.showAddrByContact(st._id)
                                    case cst.LIST_EMAIL_BY_CONTACT_ID: return addr_book_action.showEmailByContact(st._id)
                                    case cst.LIST_GROUP_BY_CONTACT_ID: return addr_book_action.showGroupByContact(st._id)
                                    case cst.LIST_PHONE_BY_CONTACT_ID: return addr_book_action.showPhoneByContact(st._id)
                                    case cst.LIST_PORTRAIT_BY_CONTACT_ID: return addr_book_action.showPortraitByContact(st._id)
                                    case cst.LIST_THUMBNAIL_BY_CONTACT_ID: return addr_book_action.showThumbnailByContact(st._id)
                                    case cst.LIST_TWITTER_BY_CONTACT_ID: return addr_book_action.showTwitterByContact(st._id)
                                }
                        }
                    }
                    if (mainStatus.length > 0) dispatch({ type: mainStatus })
                })
                .catch(err => { alert(err) })
        }
    }
}

export default addr_book_action