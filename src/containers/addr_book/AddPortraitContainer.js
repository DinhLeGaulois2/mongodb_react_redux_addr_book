import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddPortraitComponent from '../../components/addr_book/AddPortraitComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickAddPortrait: (data) => { dispatch(actions.addPortrait(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddPortraitContainer = connect(
    null,
    mapDispatchToProps
)(AddPortraitComponent)

export default AddPortraitContainer