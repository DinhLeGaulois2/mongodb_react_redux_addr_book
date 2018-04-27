import axios from "axios"

import cst from '../../constants/addr_book/cst'

const addr_book_action = {
    addAddress: (data) => {
        return dispatch => {
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.post("", data)
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
            axios.get("", data)
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
            axios.get("", data)
                .then(response => {
                    dispatch({
                        type: cst.LIST_GROUPS_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteAddress: (id) => {
        return dispatch => {
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.delete("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
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
            axios.put("", id)
                .then(response => {
                    dispatch({
                        type: cst.UPDATE_TWITTER_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

}

export default addr_book_action