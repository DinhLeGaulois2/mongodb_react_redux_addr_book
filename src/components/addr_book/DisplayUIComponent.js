import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/addr_book/cst'

import '../../style.scss'

import ShowContactsContainer from '../../containers/addr_book/ShowContactsContainer'
import ShowGroupsContainer from '../../containers/addr_book/ShowGroupsContainer'


const DisplayUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_CONTACTS)
            }}>Show Contacts</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_GROUPS)
            }}>Show Groups</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.LIST_CONTACTS_SUCCESS &&
                    <ShowContactsContainer />
                }
                {status === cst.LIST_GROUPS_SUCCESS &&
                    <ShowGroupsContainer />
                }
            </div>
        }
    </div>
)
DisplayUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired,
}

export default DisplayUIComponent