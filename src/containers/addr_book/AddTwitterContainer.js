import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddTwitterComponent from '../../components/addr_book/AddTwitterComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickTwitter: (data) => { dispatch(actions.addTwitter(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddTwitterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTwitterComponent)

export default AddTwitterContainer