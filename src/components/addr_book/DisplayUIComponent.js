import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/addr_book/cst'

import '../../style.scss'

import ShowAddrContainer from '../../containers/addr_book/ShowAddrContainer'
import ShowContactsContainer from '../../containers/addr_book/ShowContactsContainer'
import ShowEmailsContainer from '../../containers/addr_book/ShowEmailsContainer'
import ShowGroupsContainer from '../../containers/addr_book/ShowGroupsContainer'
import ShowPhonesContainer from '../../containers/addr_book/ShowPhonesContainer'
import ShowPortraitsContainer from '../../containers/addr_book/ShowPortraitsContainer'
import ShowThumbnailsContainer from '../../containers/addr_book/ShowThumbnailsContainer'
import ShowTwitterContainer from '../../containers/addr_book/ShowTwitterContainer'


const DisplayUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_CONTACTS)
            }}>Addresses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_ADDRESSES)
            }}>Addresses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_PHONES)
            }}>Phones</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_EMAILS)
            }}>Emails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_PORTRAITS)
            }}>Portraits</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_THUMBNAILS)
            }}>Thumbnails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_TWITTER)
            }}>Twitter</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.LIST_GROUPS)
            }}>Groups</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.LIST_ADDRESSES &&
                    <ShowAddrContainer />
                }
                {status === cst.LIST_PHONES &&
                    <ShowPhonesContainer />
                }
                {status === cst.LIST_EMAILS &&
                    <ShowEmailsContainer />
                }
                {status === cst.LIST_PORTRAITS &&
                    <ShowPortraitsContainer />
                }
                {status === cst.LIST_THUMBNAILS &&
                    <ShowThumbnailsContainer />
                }
                {status === cst.LIST_TWITTER &&
                    <ShowTwitterContainer />
                }
                {status === cst.LIST_GROUPS &&
                    <ShowGroupsContainer />
                }
                {status === cst.LIST_CONTACTS &&
                    <ShowContactsContainer />
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