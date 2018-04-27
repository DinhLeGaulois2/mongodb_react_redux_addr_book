import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddGroupComponent from '../../components/addr_book/AddGroupComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickAddGroup: (data) => { dispatch(actions.addGroup(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddGroupContainer = connect(
    null,
    mapDispatchToProps
)(AddGroupComponent)

export default AddGroupContainer