import cst from '../../constants/addr_book/cst'

const initialStates = {
    data: [],
    selectedContact: [],
    status: action.type,
    isList: true,
    isAddContactSelected: false
}

const addr_bookReducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_WITH_CONTACT: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: true
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
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.groups._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_ADDR: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.addresses._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_PHONE: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.phones._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_EMAIL: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.emails._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_PORTRAIT: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.portraits._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_THUMBNAIL: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.thumbnails._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_TWITTER: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.filter(c => c.twitters._id == action.payload ? null : c)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.GET_ALL_CONTACT: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_CONTACTS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_ADDRESSES: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_PHONES: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_EMAILS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_GROUPS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_TWITTER: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_THUMBNAILS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.DISPLAY_LIST_PORTRAITS: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false

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
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_ADDR: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_PHONE: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_EMAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_PORTRAIT: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_THUMBNAIL: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_TWITTER: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        case cst.UPDATE_CONTACT_GROUP: {
            return Object.assign({}, state, {
                data: [],
                selectedContact: [],
                status: action.type,
                isList: true,
                isAddContactSelected: false
            })
        }
        default: return state
    }
}

export default addr_bookReducer