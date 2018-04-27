import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddPortraitComponent from '../../components/addr_book/AddPortraitComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddPortraitContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPortraitComponent)

export default AddPortraitContainer