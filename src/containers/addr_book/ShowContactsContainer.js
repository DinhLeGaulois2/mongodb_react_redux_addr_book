import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowContactsComponent from '../../components/addr_book/ShowContactsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteContact(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowContactsComponent)

export default ShowContactsContainer