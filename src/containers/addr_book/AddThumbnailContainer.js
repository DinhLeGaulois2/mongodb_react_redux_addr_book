import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import AddThumbnailComponent from '../../components/addr_book/AddThumbnailComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickAddThumbnail: (data) => { dispatch(actions.addThumbnail(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddThumbnailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddThumbnailComponent)

export default AddThumbnailContainer