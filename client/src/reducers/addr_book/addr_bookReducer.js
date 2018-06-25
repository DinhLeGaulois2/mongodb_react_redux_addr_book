import cst from '../../constants/addr_book/cst'

const initialStates = {
    data: [],
    selectedContact: [],
    status: action.type,
    isList: true,
    isAddWithContact: false
}

const addr_bookReducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_CONTACT: {
            return Object.assign({}, state, {
                data: data.push(action.payload),
                selectedContact: action.payload,
                status: action.type
            })
        }
        case cst.DELETE_CONTACT: {
            return Object.assign({}, state, {
                data: state.data.filter(d => d._id !== action.payload._id ? d : null),
                selectedContact: [],
                isList: true,
                status: action.type
            })
        }
        case cst.DELETE_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_ADDR: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_PHONE: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_EMAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_PORTRAIT: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_THUMBNAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_TWITTER: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DELETE_CONTACT_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false

            })
        }
        case cst.GET_ALL_CONTACT: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_CONTACTS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_ADDRESSES: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_PHONES: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_EMAILS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_GROUPS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_TWITTER: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_THUMBNAILS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.DISPLAY_LIST_PORTRAITS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false

            })
        }
        case cst.SELECT_A_CONTACT: {
            return Object.assign({}, state, {
                status: action.type,
                selectedContact: state.data.filter(a => a._id === action.payload ? a : null)
            })
        }
        case cst.UPDATE_CONTACT: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_ADDR: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_PHONE: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_EMAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_PORTRAIT: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_THUMBNAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_TWITTER: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        case cst.UPDATE_CONTACT_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddWithContact: false
            })
        }
        default: return state
    }
}

export default addr_bookReducer