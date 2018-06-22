import React, {Component} from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'

import ShowAddrComponent from '../../Components/addr_book/ShowAddrComponent'
import ShowContactsComponent from '../../Components/addr_book/ShowContactsComponent'
import ShowEmailsComponent from '../../Components/addr_book/ShowEmailsComponent'
import ShowGroupsComponent from '../../Components/addr_book/ShowGroupsComponent'
import ShowPhonesComponent from '../../Components/addr_book/ShowPhonesComponent'
import ShowPortraitsComponent from '../../Components/addr_book/ShowPortraitsComponent'
import ShowThumbnailsComponent from '../../Components/addr_book/ShowThumbnailsComponent'
import ShowTwitterComponent from '../../Components/addr_book/ShowTwitterComponent'


class ShowContactsComponent extends Component {
    render() {
        const { data, selectedContact, status, deleteContact, setStatus, selectAContact,
    showPhoneByContact, showEmailByContact, showGroupByContact, showTwitterByContact,
    showThumbnailByContact, showPortraitByContact, showAddrByContact } = this.props
    return (
        <div>
            {status == cst.SELECT_A_CONTACT_SUCCESS &&
                <div>
                    <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
                        <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showAddrByContact()
                        }}>Addresses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showPhoneByContact()
                        }}>Phones</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showEmailByContact()
                        }}>Emails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showPortraitByContact()
                        }}>Portraits</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showThumbnailByContact()
                        }}>Thumbnails</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showTwitterByContact()
                        }}>Twitter</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn" onClick={e => {
                            e.preventDefault()
                            showGroupByContact()
                        }}>Groups</button>
                        <br />
                    </td></tr></tbody></table>
                    <h3 align="center">[Action for: "{selectedContact[0].name}" (Title: {selectedContact[0].title}, Company: {selectedContact[0].company})]</h3>
                </div>
            }
            {status == cst.LIST_CONTACTS_SUCCESS &&
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {data.map((aUnit, index) =>
                        <tr key={index}><td style={{ 'padding': '10px', 'backgroundColor': 'gray' }}>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>{aUnit.name}</b></h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deleteContact(aUnit._id)
                                }}>X</button>
                            </div>
                            <div style={{ 'padding': '10px', 'backgroundColor': 'black', 'color': 'white', 'borderRadius': '10px' }}>
                                <b>Company:</b> {aUnit.company}<br />
                                <b>Title:</b> {aUnit.title}
                            </div>
                            <br/>
                            <p align="center">
                                <button type="button" className="btn" onClick={e => {
                                    e.preventDefault()
                                    selectAContact(aUnit._id)
                                }}>Select</button>
                            </p>
                            <hr />
                        </td></tr>
                    )}
                </tbody></table>
            }
            {status === cst.LIST_ADDR_BY_CONTACT_ID_SUCCESS &&
                <ShowAddrComponent />
            }
            {status === cst.LIST_PHONE_BY_CONTACT_ID_SUCCESS &&
                <ShowPhonesComponent />
            }
            {status === cst.LIST_EMAIL_BY_CONTACT_ID_SUCCESS &&
                <ShowEmailsComponent />
            }
            {status === cst.LIST_PORTRAIT_BY_CONTACT_ID_SUCCESS &&
                <ShowPortraitsComponent />
            }
            {status === cst.LIST_THUMBNAIL_BY_CONTACT_ID_SUCCESS &&
                <ShowThumbnailsComponent />
            }
            {status === cst.LIST_TWITTER_BY_CONTACT_ID_SUCCESS &&
                <ShowTwitterComponent />
            }
            {status === cst.LIST_GROUP_BY_CONTACT_ID_SUCCESS &&
                <ShowGroupsComponent />
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    status: state.addrbook.status,
    selectedContact: state.addrbook.selectedContact
})

export default connect(mapStateToProps, actions)(requireAuth(ShowContactsComponent))