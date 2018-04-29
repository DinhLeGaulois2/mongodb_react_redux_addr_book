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

    showContacts: (data) => {
        return dispatch => {
            axios.get("/api/get/contacts", data)
                .then(response => {
                    dispatch({
                        type: cst.LIST_CONTACTS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showGroups: (data) => {
        return dispatch => {
            axios.get("/api/get/groups", data)
                .then(response => {
                    dispatch({
                        type: cst.LIST_GROUPS_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    showPhoneByContact: (id) => {
        return dispatch => {
            axios.get("/api/get/phone/contact/", id)
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
            axios.get("/api/get/email/contact/", id)
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
            axios.get("/api/get/group/contact/", id)
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
            axios.get("/api/get/twitter/contact/", id)
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
            axios.get("/api/get/thumbnail/contact/", id)
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
            axios.get("/api/get/portrait/contact/", id)
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
            axios.delete("/api/delete/address/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_ADDR_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteContact: (id) => {
        return dispatch => {
            axios.delete("/api/delete/contact/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_CONTACT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteEmail: (id) => {
        return dispatch => {
            axios.delete("/api/delete/email/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_EMAIL_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteGroup: (id) => {
        return dispatch => {
            axios.delete("/api/delete/group/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_GROUP_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deletePhone: (id) => {
        return dispatch => {
            axios.delete("/api/delete/phone/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_PHONE_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deletePortrait: (id) => {
        return dispatch => {
            axios.delete("/api/delete/portrait/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_PORTRAIT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteThumbnail: (id) => {
        return dispatch => {
            axios.delete("/api/delete/thumbnail/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_THUMBNAIL_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteTwitter: (id) => {
        return dispatch => {
            axios.delete("/api/delete/twitter/", id)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_TWITTER_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateAddress: (id) => {
        return dispatch => {
            axios.put("/api/update/address/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_ADDR_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateContact: (id) => {
        return dispatch => {
            axios.put("/api/update/contact/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_CONTACT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateEmail: (id) => {
        return dispatch => {
            axios.put("/api/update/email/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_EMAIL_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateGroup: (id) => {
        return dispatch => {
            axios.put("/api/update/group/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_GROUP_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updatePhone: (id) => {
        return dispatch => {
            axios.put("/api/update/phone/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_PHONE_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updatePortrait: (id) => {
        return dispatch => {
            axios.put("/api/update/portrait/", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_PORTRAIT_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    updateThumbnail: (id) => {
        return dispatch => {
            axios.put("/api/update/thumbnail/", id)
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
            axios.put("/api/update/twitter/", id)
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
            if (mainStatus.length > 0) {
                axios.get("/api/get/contacts")
                    .then(response => {
                        dispatch({
                            type: cst.LIST_CONTACTS_SUCCESS,
                            payload: response.data
                        })
                        dispatch({ type: mainStatus })
                    })
                    .catch(err => { alert(err) })
            }

            if (actionStatus.length > 0) 
                dispatch({ type: actionStatus })
        }
    }
}

export default addr_book_action