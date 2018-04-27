import React from 'react'
import { connect } from 'react-redux'

import DisplayUIComponent from '../../components/addr_book/DisplayUIComponent'
import actions from '../../actions/addr_book/actions'

const mapStateToProps = (state) => ({
    status: state.addrbook.status,
    menuStatus: state.addrbook.menuStatus
})

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayUIComponent)

export default DisplayUIContainer
