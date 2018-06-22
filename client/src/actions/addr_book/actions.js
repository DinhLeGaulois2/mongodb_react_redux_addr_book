import axios from "axios"
import cst from '../../constants/addr_book/cst'

const addr_book_action = {
    aContact: "",

    addAddress: (data) => {
        return dispatch => {
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/address", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.post("http://localhost:3090/api/add/contact", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/email", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/group", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/phone", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/portrait", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/thumbnail", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                data: data,
                contactId: addr_book_action.aContact
            }
            axios.post("http://localhost:3090/api/add/twitter", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("actions, showContacts! token: " + localStorage.getItem('token'))
        return dispatch => {
            axios.get("http://localhost:3090/api/get/contacts", {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("actions, showContacts! response: " + JSON.stringify(response, null, 5))
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
            axios.get("http://localhost:3090/api/get/groups", {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
                axios.get("http://localhost:3090/api/get/addresse/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/phone/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/email/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/group/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/twitter/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/thumbnail/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
                axios.get("http://localhost:3090/api/get/portrait/contact/" + addr_book_action.aContact, {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
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
            axios.delete("http://localhost:3090/api/delete/address/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/contact/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/email/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/group/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/phone/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/portrait/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/thumbnail/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/twitter/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/address/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/contact/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/email/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/group/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/phone/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/portrait/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/thumbnail/", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.put("http://localhost:3090/api/update/twitter/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
                addr_book_action.aContact = ""
                dispatch({ type: cst.SELECT_CONTACT_NULL })
                axios.get("http://localhost:3090/api/get/contacts", {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                })
                    .then(response => {
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