import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowContactsComponent from '../../components/addr_book/ShowContactsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    status: state.addrbook.status,
    selectedContact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteContact(id))},
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))},
    onClickSelectAContact: (id) => { dispatch(actions.selectAContact(id))},
    onClick_showContacts: () => {dispatch(actions.showContacts())},
    onClick_showGroups: () => {dispatch(actions.showGroups())},
    onClick_showAddrByContact: () => {dispatch(actions.showAddrByContact())},
    onClick_showPhoneByContact: () => {dispatch(actions.showPhoneByContact())},
    onClick_showEmailByContact: () => {dispatch(actions.showEmailByContact())},
    onClick_showGroupByContact: () => {dispatch(actions.showGroupByContact())},
    onClick_showTwitterByContact: () => {dispatch(actions.showTwitterByContact())},
    onClick_showThumbnailByContact: () => {dispatch(actions.showThumbnailByContact())},
    onClick_showPortraitByContact: () => {dispatch(actions.showPortraitByContact())}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowContactsComponent)

export default ShowContactsContainer