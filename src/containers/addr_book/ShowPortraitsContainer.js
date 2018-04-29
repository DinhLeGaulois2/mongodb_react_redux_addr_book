import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowPortraitsComponent from '../../components/addr_book/ShowPortraitsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => { dispatch(actions.deletePortrait(id))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowPortraitsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPortraitsComponent)

export default ShowPortraitsContainer