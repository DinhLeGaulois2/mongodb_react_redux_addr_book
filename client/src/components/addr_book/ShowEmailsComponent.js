import React, {Component} from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import actions from '../../actions/addr_book/actions'

class ShowEmailsComponent extends Component {
    render() {
        const { data, deleteEmail } = this.props
        return (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {data.map((aUnit, index) =>
                <tr key={index}><td>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Email</b> (id: {aUnit._id})</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            deleteEmail(aUnit._id)
                        }}>X</button>
                    </div>
                    <b>Type:</b> {aUnit.type}<br />
                    <b>Email:</b> {aUnit.address}<br />
                </td></tr>
            )}
        </tbody></table>
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.addrbook.data,
    contact: state.addrbook.selectedContact
})

export default connect(mapStateToProps, actions)(requireAuth(ShowEmailsComponent))