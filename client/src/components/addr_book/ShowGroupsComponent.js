import React, { Component } from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'
import requireAuth from '../../components/requireAuth'

class ShowGroupsComponent extends Component {
    render() {
        const { data, deleteGroup } = this.props
        return (
            <div>
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {data.map((aUnit, index) =>
                        <tr key={index}><td>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>Group</b> (id: {aUnit._id})</h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deleteGroup(aUnit._id)
                                }}>X</button>
                            </div>
                            <b>Name:</b> {aUnit.name}<br />
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

export default connect(mapStateToProps, actions)(requireAuth(ShowGroupsComponent))