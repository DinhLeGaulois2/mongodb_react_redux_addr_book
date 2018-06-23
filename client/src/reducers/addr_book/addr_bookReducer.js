import cst from '../../constants/addr_book/cst'

const initialStates = {
    data: [],
    selectedContactId: [],
    status: ""
}

const addr_bookReducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_CONTACT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type,
                selectedContactId: []
            })
        }
        case cst.ADD_GROUP_SUCCESS: {
            return Object.assign({}, state, {
                // data: state.data.map(d => d._id == state.selectedContactId ? d.)
                // status: action.type,
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
        } case cst.LIST_CONTACTS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_CONTACTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload
            })
        }

        case cst.LIST_ADDRESSES: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_ADDRESSES_SUCCESS: {
            return Object.assign({}, state, {

            })
        }

        case cst.LIST_PHONES: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_PHONES_SUCCESS: {
            return Object.assign({}, state, {

            })
        }

        case cst.LIST_EMAILS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_EMAILS_SUCCESS: {
            return Object.assign({}, state, {

            })
        }

        case cst.LIST_GROUPS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_GROUPS_SUCCESS: {
            return Object.assign({}, state, {

            })
        }

        case cst.LIST_TWITTER: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_TWITTER_SUCCESS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_THUMBNAILS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_THUMBNAILS_SUCCESS: {
            return Object.assign({}, state, {

            })
        }

        case cst.LIST_PORTRAITS: {
            return Object.assign({}, state, {

            })
        }
        case cst.LIST_PORTRAITS_SUCCESS: {
            return Object.assign({}, state, {

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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
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
                data: state.data.filter(a => a._id === action.payload ? null : a)
            })
        }
        case cst.SELECT_CONTACT_NULL: {
            return Object.assign({}, state, {
                selectedContactId: {}
            })
        }

        case cst.SELECT_A_CONTACT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                selectedContactId: state.data.filter(a => a._id === action.payload ? a : null)
            })
        }
        default: return state
    }
}

export default addr_bookReducer