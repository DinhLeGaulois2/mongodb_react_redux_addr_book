import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowPhonesComponent from '../../components/addr_book/ShowPhonesComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deletePhone(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowPhonesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPhonesComponent)

export default ShowPhonesContainer