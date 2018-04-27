import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddAddressComponent from '../../components/addr_book/AddAddressComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickAddAddress: (data) => { dispatch(actions.addAddress(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddAddressContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAddressComponent)

export default AddAddressContainer