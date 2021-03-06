import axios from "axios"
import cst from '../../constants/addr_book/cst'

const addr_book_action = {
    getAllContact: () => {
        return dispatch => {
            axios.get("http://localhost:3090/api/get/contacts", {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("actions, getAllContact, response: " + JSON.stringify(response, null, 5))
                    dispatch({
                        type: cst.GET_ALL_CONTACT,
                        payload: response.data
                    })
                })
                .catch(err => alert(err))
        }
    },

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
                        type: cst.ADD_ADDR,
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
                        type: cst.ADD_CONTACT,
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
                        type: cst.ADD_EMAIL,
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
                        type: cst.ADD_GROUP,
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
                        type: cst.ADD_PHONE,
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
                        type: cst.ADD_THUMBNAIL,
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
                        type: cst.ADD_THUMBNAIL,
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
                        type: cst.ADD_TWITTER,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    selectAContact: (id) => {
        return dispatch => {
            addr_book_action.aContact = id
            axios.get("http://localhost:3090/api/get/contact/" + id, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {

                    // dispatch({
                    //     type: cst.ADD_TWITTER,
                    //     payload: response.data
                    // })
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("action, selectAContact, response: " + JSON.stringify(response, null, 5))
                    dispatch({
                        type: cst.SELECT_A_CONTACT,
                        payload: id
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    selectAContact4Add: (data) => {
        return dispatch => {
            addr_book_action.aContact = data.selectAContact
            dispatch({
                type: cst.SELECT_A_CONTACT,
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
                    dispatch({
                        type: cst.GET_ALL_CONTACT,
                        payload: response.data
                    })
                    dispatch({
                        type: cst.DISPLAY_LIST_CONTACTS,
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
                        type: cst.DISPLAY_LIST_GROUPS,
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
                            type: cst.DISPLAY_LIST_ADDR_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_PHONE_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_EMAIL_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_GROUP_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_TWITTER_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_THUMBNAIL_BY_CONTACT_ID,
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
                            type: cst.DISPLAY_LIST_PORTRAIT_BY_CONTACT_ID,
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
                        type: cst.DELETE_ADDR,
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
                        type: cst.DELETE_CONTACT,
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
                        type: cst.DELETE_EMAIL,
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
                        type: cst.DELETE_GROUP,
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
                        type: cst.DELETE_PHONE,
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
                        type: cst.DELETE_PORTRAIT,
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
                        type: cst.DELETE_THUMBNAIL,
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
                        type: cst.DELETE_TWITTER,
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
                        type: cst.UPDATE_ADDR,
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
                        type: cst.UPDATE_CONTACT,
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
                        type: cst.UPDATE_EMAIL,
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
                        type: cst.UPDATE_GROUP,
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
                        type: cst.UPDATE_PHONE,
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
                        type: cst.UPDATE_PORTRAIT,
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
                        type: cst.UPDATE_THUMBNAIL,
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
                        type: cst.UPDATE_TWITTER,
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
                            type: cst.DISPLAY_LIST_CONTACTS,
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