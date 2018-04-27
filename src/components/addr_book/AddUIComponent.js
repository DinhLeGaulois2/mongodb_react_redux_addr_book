import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'
import cst from '../../constants/addr_book/cst'

import AddAddressContainer from '../../containers/addr_book/AddAddressContainer'
import AddContactContainer from '../../containers/addr_book/AddContactContainer'
import AddEmailContainer from '../../containers/addr_book/AddEmailContainer'
import AddGroupContainer from '../../containers/addr_book/AddGroupContainer'
import AddPhoneContainer from '../../containers/addr_book/AddPhoneContainer'
import AddPortraitContainer from '../../containers/addr_book/AddPortraitContainer'
import AddThumbnailContainer from '../../containers/addr_book/AddThumbnailContainer'
import AddTwitterContainer from '../../containers/addr_book/AddTwitterContainer'

const AddUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_ADDR)
            }}>Add Address</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_CONTACT)
            }}>Add Contact</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_EMAIL)
            }}>Add Email</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_GROUP)
            }}>Add Group</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_PHONE)
            }}>Add Phone</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_PORTRAIT)
            }}>Add Portrait</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_THUMBNAIL)
            }}>Add Thumbnail</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_TWITTER)
            }}>Add Twitter</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {status === cst.ADD_DPT &&
                    <AddAddressContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddContactContainer />
                }
                {status === cst.ADD_DPT &&
                    <AddEmailContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddGroupContainer />
                }
                {status === cst.ADD_DPT &&
                    <AddPhoneContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddPortraitContainer />
                }
                {status === cst.ADD_DPT &&
                    <AddThumbnailContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddTwitterContainer />
                }
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