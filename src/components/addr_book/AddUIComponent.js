import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'
import cst from '../../constants/addr_book/cst'

// import AddDptContainer from '../../containers/addr_book/AddDptContainer'
// import AddEmpContainer from '../../containers/addr_book/AddEmpContainer'

const AddUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_DPT)
            }}>Add Department</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_EMP)
            }}>Add Employee</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {/* {status === cst.ADD_DPT &&
                    <AddDptContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddEmpContainer />
                } */}
            </div>
        }
    </div>
)

AddUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired
}

export default AddUIComponent