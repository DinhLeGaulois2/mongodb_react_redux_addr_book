import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/addr_book/actions'
import ShowGroupsComponent from '../../components/addr_book/ShowGroupsComponent'

const mapStateToProps = (state) => ({
    data: state.addrbook.data
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (bId) => { dispatch(actions.RRRRRRRRRRRRRR(bId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const ShowGroupsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowGroupsComponent)

export default ShowGroupsContainer