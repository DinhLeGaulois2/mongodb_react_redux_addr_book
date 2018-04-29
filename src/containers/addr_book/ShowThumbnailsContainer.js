import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowThumbnailsComponent from '../../components/addr_book/ShowThumbnailsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deleteThumbnail(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowThumbnailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowThumbnailsComponent)

export default ShowThumbnailsContainer