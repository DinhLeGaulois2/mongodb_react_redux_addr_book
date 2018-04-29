import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowTwitterComponent from '../../components/addr_book/ShowTwitterComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteTwitter(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowTwitterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTwitterComponent)

export default ShowTwitterContainer