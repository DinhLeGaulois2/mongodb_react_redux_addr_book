import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddPhoneComponent from '../../components/addr_book/AddPhoneComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddPhoneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPhoneComponent)

export default AddPhoneContainer