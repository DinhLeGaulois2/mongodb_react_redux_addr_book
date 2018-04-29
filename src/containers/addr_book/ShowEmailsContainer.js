import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowEmailsComponent from '../../components/addr_book/ShowEmailsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteEmail(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowEmailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowEmailsComponent)

export default ShowEmailsContainer