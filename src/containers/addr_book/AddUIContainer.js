import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddUIComponent from '../../components/addr_book/AddUIComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    selectedContactLength: state.addrbook.selectedContact.length,
    status: state.addrbook.status,
    menuStatus: state.addrbook.menuStatus
})

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2)) },
    onClickSelectContact4Add: (data) => { dispatch(actions.selectAContact4Add(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUIComponent)

export default AddUIContainer

