import cst from '../../constants/addr_book/cst'

const initialStates = {
    data: [],
    status: cst.LIST_THUMBNAILS,
    menuStatus: cst.MENU_DISPLAY
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

        case cst.ADD_CONTACT_GROUP: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.ADD_CONTACT_GROUP_SUCCESS: {
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

        case cst.LIST_ADDRESSES: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_ADDRESSES_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_PHONES: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_PHONES_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_EMAILS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_EMAILS_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_GROUPS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_GROUPS_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_TWITTER: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_TWITTER_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_THUMBNAILS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_THUMBNAILS_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.LIST_PORTRAITS: {
            return Object.assign({}, state, {
                status: action.type,
            })
        }

        case cst.LIST_PORTRAITS_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
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