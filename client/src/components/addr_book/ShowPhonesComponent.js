import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowPhonesComponent extends Component {
    render() {
        const { data, deletePhone } = this.props
        return (
            <div>
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {data.map((aUnit, index) =>
                        <tr key={index}><td>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>Phone</b> (id: {aUnit._id})</h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deletePhone(aUnit._id)
                                }}>X</button>
                            </div>
                            <b>Type:</b> {aUnit.type}<br /><br />
                            <b>Number:</b> {aUnit.number}<br /><br />
                        </td></tr>
                    )}
                </tbody></table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.adrBook.data,
    contact: state.adrBook.selectedContact
})

export default connect(mapStateToProps, actions)(requireAuth(ShowPhonesComponent))