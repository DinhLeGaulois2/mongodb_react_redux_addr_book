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
        case cst.SELECT_A_CONTACT2ADD: {
            return Object.assign({}, state, {
                selectedContact: state.data.filter(d => d._id === action.payload._id ? d : null),
                status: action.type,
                isList: false,
                isAddContactSelected: true
            })
        }
        case cst.DESELECT_A_CONTACT2ADD: {
            return Object.assign({}, state, {
                selectedContact: [],
                isAddContactSelected: false
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
                selectedContact: state.selectedContact.groups.filter(g => g._id === action.payload._id ? null : g)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_ADDR: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.addresses.filter(a => a._id === action.payload._id ? null : a)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_PHONE: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.phones.filter(p => p._id === action.payload._id ? null : p)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_EMAIL: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.emails.filter(e => e._id === action.payload._id ? null : e)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_PORTRAIT: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.portraits.filter(p => p._id === action.payload._id ? null : p)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_THUMBNAIL: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.thumbnail.filter(t => t._id === action.payload._id ? null : t)
            })

            return Object.assign({}, state, {
                data: state.data.map(d => d._id == aContact._id ? aContact : d),
                selectedContact: aContact,
                status: action.type
            })
        }
        case cst.DELETE_TWITTER: {
            const aContact = Object.assign({}, state.selectedContact, {
                selectedContact: state.selectedContact.twitters.filter(t => t._id === action.payload._id ? null : t)
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
                selectedContact: state.data,
                status: action.type,
                isList: true,
            })
        }
        case cst.DISPLAY_LIST_ADDRESSES: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_PHONES: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_EMAILS: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_GROUPS: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_TWITTER: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_THUMBNAILS: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_LIST_PORTRAITS: {
            return Object.assign({}, state, {
                data: action.payload,
                selectedContact: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.SELECT_A_CONTACT: {
            return Object.assign({}, state, {
                status: action.type,
                selectedContact: state.data.filter(a => a._id === action.payload._id ? a : null),                
                status: action.type,
                isList: false
            })
        }
        case cst.UPDATE_CONTACT: {
            return Object.assign({}, state, {
                data: state.data.map(d => d._id == state.selectedContact._id ? state.selectedContact : d),
                status: action.type,
            })
        }
        case cst.UPDATE_GROUP: {
            return Object.assign({}, state, {
                data: state.data.map(d => d._id == state.selectedContact._id ? state.selectedContact : d),
                status: action.type,
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