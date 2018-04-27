import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddContactComponent from '../../components/addr_book/AddContactComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickAddContact: (data) => { dispatch(actions.addContact(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContactComponent)

export default AddContactContainer