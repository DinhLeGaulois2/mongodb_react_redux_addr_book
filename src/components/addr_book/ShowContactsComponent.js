import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/addr_book/cst'

import ShowAddrContainer from '../../containers/addr_book/ShowAddrContainer'
import ShowContactsContainer from '../../containers/addr_book/ShowContactsContainer'
import ShowEmailsContainer from '../../containers/addr_book/ShowEmailsContainer'
import ShowGroupsContainer from '../../containers/addr_book/ShowGroupsContainer'
import ShowPhonesContainer from '../../containers/addr_book/ShowPhonesContainer'
import ShowPortraitsContainer from '../../containers/addr_book/ShowPortraitsContainer'
import ShowThumbnailsContainer from '../../containers/addr_book/ShowThumbnailsContainer'
import ShowTwitterContainer from '../../containers/addr_book/ShowTwitterContainer'


const ShowContactsComponent = ({ data, status, onClickDelete, onClickChangeStatus,
    onClickSelectAContact, onClick_showGroups, onClick_showPhoneByContact,
    onClick_showEmailByContact, onClick_showGroupByContact, onClick_showTwitterByContact,
    onClick_showThumbnailByContact, onClick_showPortraitByContact }) => (
        <div>
            {status == cst.SELECT_A_CONTACT &&
                <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_ADDR_BY_CONTACT_ID)
                    }}>Addresses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_PHONE_BY_CONTACT_ID)
                    }}>Phones</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_EMAIL_BY_CONTACT_ID)
                    }}>Emails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_PORTRAIT_BY_CONTACT_ID)
                    }}>Portraits</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_THUMBNAIL_BY_CONTACT_ID)
                    }}>Thumbnails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_TWITTER_BY_CONTACT_ID)
                    }}>Twitter</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        onClickChangeStatus("", cst.LIST_GROUP_BY_CONTACT_ID)
                    }}>Groups</button>
                    <br />
                </td></tr></tbody></table>
            }
            {status == cst.LIST_CONTACTS_SUCCESS &&
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {data.map((aUnit, index) =>
                        <tr key={index}><td>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>Contact</b></h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    onClickDelete(aUnit._id)
                                }}>X</button>
                            </div>
                            <b>Name:</b> {aUnit.name}<br />
                            <b>Company:</b> {aUnit.company}<br />
                            <b>Title:</b> {aUnit.title}
                            <p align="center">
                                <button type="button" className="btn" onClick={e => {
                                    e.preventDefault()
                                    onClickSelectAContact(aUnit._id)
                                }}>Select</button>
                            </p>
                        </td></tr>
                    )}
                </tbody></table>
            }
            {status === cst.LIST_ADDR_BY_CONTACT_ID_SUCCESS &&
                <ShowAddrContainer />
            }
            {status === cst.LIST_PHONE_BY_CONTACT_ID_SUCCESS &&
                <ShowPhonesContainer />
            }
            {status === cst.LIST_EMAIL_BY_CONTACT_ID_SUCCESS &&
                <ShowEmailsContainer />
            }
            {status === cst.LIST_PORTRAIT_BY_CONTACT_ID_SUCCESS &&
                <ShowPortraitsContainer />
            }
            {status === cst.LIST_THUMBNAIL_BY_CONTACT_ID_SUCCESS &&
                <ShowThumbnailsContainer />
            }
            {status === cst.LIST_TWITTER_BY_CONTACT_ID_SUCCESS &&
                <ShowTwitterContainer />
            }
            {status === cst.LIST_GROUP_BY_CONTACT_ID_SUCCESS &&
                <ShowGroupsContainer />
            }
        </div>
    )

ShowContactsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        company: PropTypes.string,
        title: PropTypes.string
    })),
    status: PropTypes.string,
    onClickDelete: PropTypes.func.isRequired,
    onClickChangeStatus: PropTypes.func.isRequired,
    onClickSelectAContact: PropTypes.func.isRequired,
    onClick_showContacts: PropTypes.func.isRequired,
    onClick_showGroups: PropTypes.func.isRequired,
    onClick_showPhoneByContact: PropTypes.func.isRequired,
    onClick_showEmailByContact: PropTypes.func.isRequired,
    onClick_showGroupByContact: PropTypes.func.isRequired,
    onClick_showTwitterByContact: PropTypes.func.isRequired,
    onClick_showThumbnailByContact: PropTypes.func.isRequired,
    onClick_showPortraitByContact: PropTypes.func.isRequired,
}

export default ShowContactsComponent