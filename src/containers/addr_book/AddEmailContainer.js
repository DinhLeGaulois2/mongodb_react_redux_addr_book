import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddEmailComponent from '../../components/addr_book/AddEmailComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickAddEmail: (data) => { dispatch(actions.addEmail(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddEmailContainer = connect(
    null,
    mapDispatchToProps
)(AddEmailComponent)

export default AddEmailContainer