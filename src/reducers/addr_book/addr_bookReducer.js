import cst from '../../constants/addr_book/cst'

const initialStates = {
    data: [],
    selectedContact: [],
    status: cst.LIST_THUMBNAILS,
    menuStatus: cst.MENU_NEUTRAL
}

const a_book = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_CONTACT: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_CONTACT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                selectedContact: action.payload
            })
        }

        case cst.ADD_GROUP: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_GROUP_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_ADDR: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_ADDR_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_PHONE: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_PHONE_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_EMAIL: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_EMAIL_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_PORTRAIT: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_PORTRAIT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_THUMBNAIL: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_THUMBNAIL_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_TWITTER: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_TWITTER_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_CONTACTS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_CONTACTS_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_EMAIL_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_EMAIL_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_PHONE_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_PHONE_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_ADDR_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_ADDR_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_GROUP_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_GROUP_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }


        case cst.LIST_TWITTER_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_TWITTER_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }


        case cst.LIST_THUMBNAIL_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_THUMBNAIL_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }


        case cst.LIST_PORTRAIT_BY_CONTACT_ID: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_PORTRAIT_BY_CONTACT_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DELETE_CONTACT: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }
        case cst.DELETE_CONTACT_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.LIST_CONTACTS_SUCCESS,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_GROUP: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_GROUP_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_ADDR: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_ADDR_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_PHONE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_PHONE_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_EMAIL: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_EMAIL_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_PORTRAIT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_PORTRAIT_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_THUMBNAIL: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_THUMBNAIL_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_TWITTER: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_TWITTER_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.type,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.DELETE_CONTACT_GROUP: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DELETE_CONTACT_GROUP_SUCCESS: {
            return Object.assign({}, state, {
                status: cst.LIST_CONTACTS,
                data: state.data.filter(a => a._id == action.payload ? null : a)
            })
        }
        case cst.SELECT_CONTACT_NULL: {            
            return Object.assign({}, state, {
                selectedContact: {}
            })
        }

        case cst.SELECT_A_CONTACT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                selectedContact: state.data.filter(a => a._id == action.payload ? a : null)
            })
        }
        case cst.MENU_ADD: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }
        case cst.MENU_DISPLAY: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }
        case cst.MENU_NEUTRAL: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }

        case cst.MENU_ADD: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }

        case cst.MENU_DISPLAY: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }

    }
    return state;
}

export default a_book