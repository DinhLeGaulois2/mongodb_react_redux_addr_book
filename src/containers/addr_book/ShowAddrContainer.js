import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowAddrComponent from '../../components/addr_book/ShowAddrComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteAddress(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowAddrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowAddrComponent)

export default ShowAddrContainer