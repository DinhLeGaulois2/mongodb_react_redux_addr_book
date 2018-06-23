import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowContactsComponent extends Component {
    constructor(props) {
        super(props)
        this.props.showContacts()
    }

    render() {
        const { contacts, selectAContact } = this.props
        return (
            <div>
                {contacts.length > 0 &&
                    <table align="center"><tbody>
                        {contacts.map(contact => 
                            <tr key={contact._id}><td style={{ 'padding': '10px' , 'backgroundColor': '#a1c9da', 'width': '85%' }}>
                                <h3><b>Contact</b></h3>
                                <ul>
                                    <li><b><u>Name:</u></b> {contact.name}</li>
                                    <li><b><u>Company:</u></b> {contact.company}</li>
                                    <li><b><u>Title:</u></b> {contact.title}</li>
                                </ul>
                                <br />
                                <p align="center">
                                    <button type="button" className="btn" onClick={e => {
                                        selectAContact(contact._id)
                                    }}>More Details</button>
                                </p>
                                <hr />
                            </td>
                            </tr>
                        )}
                    </tbody></table>
                }
                {contacts.length === 0 &&
                    <h1 align="center">Nothing to Show!</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.adrBook.data
})

export default connect(mapStateToProps, actions)(requireAuth(ShowContactsComponent))