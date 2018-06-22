import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/addr_book/cst'

import '../../style.scss'

import AddUIContainer from '../../containers/addr_book/AddUIContainer'
import ShowContactsContainer from '../../containers/addr_book/ShowContactsContainer'

const MainMenuComponent = ({ menuStatus, changeStatus }) =>
    <div>
        <table style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr>
            <td align="center" style={{ 'padding': '10px' }}>
                <p align="center">
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        changeStatus(cst.MENU_ADD, "")
                    }}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        changeStatus(cst.MENU_DISPLAY, "")
                    }}>Display Contacts</button>
                </p>
            </td>
        </tr></tbody></table>
        <br />
        {menuStatus == cst.MENU_ADD &&
            <AddUIContainer />
        }
        {menuStatus == cst.MENU_DISPLAY &&
            <ShowContactsContainer />
        }
    </div>

MainMenuComponent.prototype = {
    menuStatus: PropTypes.string,
    changeStatus: PropTypes.func.isRequired
}

export default MainMenuComponent